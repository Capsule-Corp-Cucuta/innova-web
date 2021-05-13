import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.LIST;

  public option: string;
  public clients: [] = [];
  public client: MatTableDataSource<[]>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    //this.adviser.sort = this.sort;
    //this.adviser.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.client.filter = filterValue.trim().toLowerCase();

    if (this.client.paginator) {
      this.client.paginator.firstPage();
    }
  }

  public activateAndDeactivate(IdClient: string, state: boolean): void {
    this.option = state ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE;

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
        //TODO
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  public openDialog(client: string): void {
    if (client) {
      this.dialog.open(ModalComponent, {
        data: client,
      });
    }
  }

  private loadData(): void {
    //TODO
  }
}
