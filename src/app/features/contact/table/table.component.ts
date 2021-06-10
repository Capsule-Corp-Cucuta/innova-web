import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { Contact } from '../../../core/models/contact.model';
import { ModalComponent } from '../modal/modal.component';
import { FacadeService } from '../../../shared/services/facade.service';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { finalize } from 'rxjs/operators';
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
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public contact: MatTableDataSource<Contact>;
  public filter = '';

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private service: FacadeService) {}

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
    this.contact.filter = filterValue.trim().toLowerCase();

    if (this.contact.paginator) {
      this.contact.paginator.firstPage();
    }
  }

  public openDialog(client: string): void {
    if (client) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: client,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.loadData();
      });
    }
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.contact.data, this.FILENAME.CONTACT);
    } else {
      this.service.exporterToExcel(
        this.contact.filteredData,
        this.FILENAME.CONTACT,
      );
    }
  }

  private loadData(): void {
    const subscription = this.service
      .findAllContact()
      .pipe(
        finalize(() => {
          this.contact.sort = this.sort;
          this.contact.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.contact = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }
}
