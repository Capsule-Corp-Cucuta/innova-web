import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { Consultant } from '../../../core/models/consultant.model';
import { FacadeService } from '../../../shared/services/facade.service';
import { Subscription } from 'rxjs';

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
  public readonly FILENAME = SharedConstants.FILENAMES;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.LIST;

  public filter = '';
  public option: string;
  public isLoading = false;
  public consultant: MatTableDataSource<Consultant>;

  private subscriptions: Subscription[] = [];

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
  public applyFilter(): void {
    const filterValue = this.filter;
    this.consultant.filter = filterValue.trim().toLowerCase();

    if (this.consultant.paginator) {
      this.consultant.paginator.firstPage();
    }
  }

  public activateAndDeactivate(id: string, state: boolean): void {
    this.option = state === false ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE;
    Swal.fire({
      title: SharedConstants.ALERTACTIVATE.TITLE,
      text: SharedConstants.ALERTACTIVATE.TEXT + this.option + SharedConstants.ALERTACTIVATE.TEXTADVISER,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: SharedConstants.ALERTACTIVATE.TOACCEPT,
      cancelButtonText: SharedConstants.ALERTACTIVATE.CANCEL,
    }).then((result) => {
      if (result.value) {
        this.option = state === false ? SharedConstants.ACTIVE : SharedConstants.INACTIVE;
        const subscription = this.service
          .enableAndDisableUser(id)
          .pipe(finalize(() => this.loadData()))
          .subscribe(
            () => {
              Swal.fire(
                SharedConstants.ALERTSUCCESS.TITLE,
                this.option + SharedConstants.ALERTSUCCESS.CONSULTANT,
                'success',
              );
              this.loadData();
            },
            () => {
              Swal.fire(
                SharedConstants.ALERTERROR.TITLE,
                this.option + SharedConstants.ALERTSUCCESS.CONSULTANT,
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
      this.service.exporterToExcel(this.consultant.data, this.FILENAME.CONSULTANT);
    } else {
      this.service.exporterToExcel(this.consultant.filteredData, this.FILENAME.CONSULTANT);
    }
  }

  private loadData(): void {
    this.isLoading = true;
    const subscription = this.service
      .findAllConsultant()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.consultant.sort = this.sort;
          this.consultant.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.consultant = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }
}
