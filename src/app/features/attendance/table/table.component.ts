import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ATTENDANCE.LIST;

  public participants: MatTableDataSource<[]>;

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    //this.participants.sort = this.sort;
    //this.participants.paginator = this.paginator;
  }

  public applyFilter(participants: Event): void {
    const filterValue = (participants.target as HTMLInputElement).value;
    this.participants.filter = filterValue.trim().toLowerCase();

    if (this.participants.paginator) {
      this.participants.paginator.firstPage();
    }
  }

  public selected(participant: string): void {
    //TODO
  }

  private loadData(): void {
    //TODO
  }
}
