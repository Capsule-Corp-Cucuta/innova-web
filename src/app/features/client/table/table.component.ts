import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { Client } from '../../../core/models/client.model';

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
  public readonly LABELS = LabelConstants.LABELS.CLIENT.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public option: string;
  public clients: [] = [];
  public client: MatTableDataSource<Client>;
  public filter = '';

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.client.filter = filterValue.trim().toLowerCase();

    if (this.client.paginator) {
      this.client.paginator.firstPage();
    }
  }

  public Deactivate(idClient: string): void {
    this.option = SharedConstants.DEACTIVATE;

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
        this.service.enableAndDisableUser(idClient).subscribe(
          (resp) => {
            Swal.fire(
              SharedConstants.ALERTSUCCESS.TITLE,
              SharedConstants.ALERTSUCCESS.TEXTDISABLE +
                SharedConstants.ALERTSUCCESS.CLIENT,
              'success',
            );
          },
          (err) => {
            Swal.fire(
              SharedConstants.ALERTERROR.TITLE,
              SharedConstants.ALERTERROR.TEXTDISABLE +
                SharedConstants.ALERTERROR.CLIENT,
              'error',
            );
          },
        );
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
    this.service
      .findAllClient()
      .pipe(
        finalize(() => {
          this.client.sort = this.sort;
          this.client.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.client = new MatTableDataSource(resp);
      });
  }
}
