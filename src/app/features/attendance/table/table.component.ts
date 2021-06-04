import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { Inscription } from 'src/app/core/models/attendance.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

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
  public readonly FILENAME = SharedConstants.FILENAMES;

  public participants: MatTableDataSource<Inscription>;
  public eventId: number;
  public participant: Inscription[];
  public filter = '';

  constructor(
    private service: FacadeService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.validateEvent();
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.participants.sort = this.sort;
    this.participants.paginator = this.paginator;
  }

  public validateEvent(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.eventId = params.id;
    });
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.participants.filter = filterValue.trim().toLowerCase();

    if (this.participants.paginator) {
      this.participants.paginator.firstPage();
    }
  }

  public selected(): void {
    this.participant = this.participants.data;
    this.service
      .createAttendanceByEvent(this.eventId, this.participant)
      .subscribe(
        () => {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTCREATE +
              SharedConstants.ALERTSUCCESS.ATTENDANCE,
            'success',
          );
          this.loadData();
        },
        () => {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTCREATE +
              SharedConstants.ALERTERROR.ATTENDANCE,
            'error',
          );
        },
      );
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(
        this.participants.data,
        this.FILENAME.ATTENDANCE,
      );
    } else {
      this.service.exporterToExcel(
        this.participants.filteredData,
        this.FILENAME.ATTENDANCE,
      );
    }
  }

  private loadData(): void {
    this.service.findAttendanceByEvent(this.eventId).subscribe((resp) => {
      this.participants = new MatTableDataSource(resp);
    });
  }
}
