import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Event } from 'src/app/core/models/event.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
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
  public readonly LABELS = LabelConstants.LABELS.EVENT.LIST;

  public authority: string;
  public client: string;
  public filter: string;
  public watch = true;
  public events: MatTableDataSource<Event>;

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.client = this.service.getUser();
    //this.watch = this.authority === 'ADMIN' ? true : false;
    this.loadDataAdmin();
  }

  ngAfterViewInit(): void {
    this.events.sort = this.sort;
    this.events.paginator = this.paginator;
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
    if (this.authority === 'ADMIN') {
      this.loadDataAdmin();
    } else if (this.authority === 'CLIENT') {
      this.loadDataByClient(this.client);
    }
  }

  private loadDataAdmin(): void {
    this.service.findAllEvent().subscribe((resp) => {
      this.events = new MatTableDataSource(resp);
    });
  }

  private loadDataByClient(client: string): void {
    this.service.findEventByClient(client).subscribe((resp) => {
      this.events = new MatTableDataSource(resp);
    });
  }
}
