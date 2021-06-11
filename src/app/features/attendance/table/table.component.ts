import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Params } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventState } from 'src/app/core/models/innova-event.model';
import { Inscription } from 'src/app/core/models/inscription.model';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ATTENDANCE.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public filter = '';
  public state: boolean;
  public eventId: number;
  public isLoading = false;
  public participantsList: Inscription[];
  public participants: MatTableDataSource<Inscription>;

  private subscriptions: Subscription[] = [];

  constructor(
    private service: FacadeService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.validateEvent();
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public validateEvent(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.eventId = params.id;
      this.state = params.state === EventState.COMPLETE ? false : true;
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
    this.participantsList = this.participants.data;
    const subscription = this.service
      .takeAttendance(this.participantsList)
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

    this.subscriptions.push(subscription);
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
    this.isLoading = true;
    const subscription = this.service
      .findInscriptionsByEvent(this.eventId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.participants.sort = this.sort;
          this.participants.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.participants = new MatTableDataSource(resp);
      });

    this.subscriptions.push(subscription);
  }
}
