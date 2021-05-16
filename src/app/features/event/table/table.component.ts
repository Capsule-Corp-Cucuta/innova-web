import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
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
  public readonly LABELS = LabelConstants.LABELS.EVENT.LIST;

  public events: [] = [];
  public event: MatTableDataSource<[]>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    //this.event.sort = this.sort;
    //this.event.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.event.filter = filterValue.trim().toLowerCase();

    if (this.event.paginator) {
      this.event.paginator.firstPage();
    }
  }

  public openDialog(event: string): void {
    if (event) {
      this.dialog.open(ModalComponent, {
        data: event,
      });
    }
  }

  private loadData(): void {
    //TODO
  }
}
