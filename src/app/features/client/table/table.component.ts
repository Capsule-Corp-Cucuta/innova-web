import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../contact/modal/modal.component';
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
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.LIST;

  public option: string;
  public clients: [] = [];
  public client: MatTableDataSource<Client>;

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.client.sort = this.sort;
    this.client.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.client.filter = filterValue.trim().toLowerCase();

    if (this.client.paginator) {
      this.client.paginator.firstPage();
    }
  }

  public Deactivate(IdClient: string): void {
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
        //TODO
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  private loadData(): void {
    this.service.findAllClient().subscribe((resp) => {
      this.client = new MatTableDataSource(resp);
    });
  }
}
