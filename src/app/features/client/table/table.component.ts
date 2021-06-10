import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { Client } from '../../../core/models/client.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;
  public readonly ROLES = SharedConstants.ROLES;

  public option: string;
  public authority: string;
  public user: string;
  public clients: [] = [];
  public client: MatTableDataSource<Client>;
  public filter = '';

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.user = this.service.getUser().id;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.client.filter = filterValue.trim().toLowerCase();

    if (this.client.paginator) {
      this.client.paginator.firstPage();
    }
  }

  public Deactivate(idClient: string, state: boolean): void {
    this.option =
      state === false ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE;

    Swal.fire({
      title: SharedConstants.ALERTACTIVATE.TITLE,
      text:
        SharedConstants.ALERTACTIVATE.TEXT +
        this.option +
        SharedConstants.ALERTACTIVATE.TEXTCLIENT,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: SharedConstants.ALERTACTIVATE.TOACCEPT,
      cancelButtonText: SharedConstants.ALERTACTIVATE.CANCEL,
    }).then((result) => {
      if (result.value) {
        this.option =
          state === false ? SharedConstants.ACTIVE : SharedConstants.INACTIVE;

        const subscription = this.service
          .enableAndDisableUser(idClient)
          .pipe(finalize(() => this.loadData()))
          .subscribe(
            () => {
              Swal.fire(
                SharedConstants.ALERTSUCCESS.TITLE,
                this.option + SharedConstants.ALERTSUCCESS.CLIENT,
                'success',
              );
            },
            () => {
              Swal.fire(
                SharedConstants.ALERTERROR.TITLE,
                this.option + SharedConstants.ALERTERROR.CLIENT,
                'error',
              );
            },
          );
        this.subscriptions.push(subscription);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.client.data, this.FILENAME.CLIENT);
    } else {
      this.service.exporterToExcel(
        this.client.filteredData,
        this.FILENAME.CLIENT,
      );
    }
  }

  private loadData(): void {
    const subscription = this.findAllEvents()
      .pipe(
        finalize(() => {
          this.client.sort = this.sort;
          this.client.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.client = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private findAllEvents(): Observable<Client[]> {
    return this.service.getAuthorities()[0] === SharedConstants.ROLES.ADMIN
      ? this.service.findAllClient()
      : this.service.findClientByConsultant(this.user);
  }
}
