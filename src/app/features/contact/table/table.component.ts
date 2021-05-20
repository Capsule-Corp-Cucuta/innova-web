import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { Contact } from '../../../core/models/contact.model';
import { ModalComponent } from '../modal/modal.component';
import { FacadeService } from '../../../shared/services/facade.service';

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
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.LIST;

  public contact: MatTableDataSource<Contact>;

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.contact.sort = this.sort;
    this.contact.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contact.filter = filterValue.trim().toLowerCase();

    if (this.contact.paginator) {
      this.contact.paginator.firstPage();
    }
  }

  public openDialog(client: string): void {
    if (client) {
      this.dialog.open(ModalComponent, {
        data: client,
      });
    }
  }

  private loadData(): void {
    this.service.findAllContact().subscribe((resp) => {
      this.contact = new MatTableDataSource(resp);
    });
  }
}
