import { finalize } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Event } from 'src/app/core/models/event.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { ModalComponent } from '../modal/modal.component';
import { FacadeService } from '../../../shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.EVENT.LIST;
  public readonly ROLES = SharedConstants.ROLES;

  public authority: string;
  public client: string;
  public filter: string;
  public watch = true;
  public events: MatTableDataSource<Event>;

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.client = this.service.getUser().id;
    //this.watch = this.authority === 'ADMIN' ? true : false;
    this.loadDataAdmin();
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.events.filter = filterValue.trim().toLowerCase();

    if (this.events.paginator) {
      this.events.paginator.firstPage();
    }
  }

  public openDialog(idEvent: number): void {
    if (idEvent) {
      this.dialog.open(ModalComponent, {
        data: idEvent,
      });
    }
  }

  private loadData(): void {
    if (this.authority === this.ROLES.ADMIN) {
      this.loadDataAdmin();
    } else if (
      this.authority === this.ROLES.CLIENT ||
      this.authority === this.ROLES.CONTACT
    ) {
      this.loadDataByClient(this.client);
    }
  }

  private loadDataAdmin(): void {
    this.service
      .findAllEvent()
      .pipe(
        finalize(() => {
          this.events.sort = this.sort;
          this.events.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.events = new MatTableDataSource(resp);
      });
  }

  private loadDataByClient(client: string): void {
    this.service
      .findEventByClient(client)
      .pipe(
        finalize(() => {
          this.events.sort = this.sort;
          this.events.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.events = new MatTableDataSource(resp);
      });
  }
}
