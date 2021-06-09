import { finalize } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { Event, EventState } from 'src/app/core/models/event.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

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
  public readonly ROLES = SharedConstants.ROLES;
  public readonly LABELS = LabelConstants.LABELS.EVENT.LIST;

  public client: string;
  public filter: string;
  public authority: string;
  public events: MatTableDataSource<Event>;

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.client = this.service.getUser().id;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.events.filter = filterValue.trim().toLowerCase();

    if (this.events.paginator) {
      this.events.paginator.firstPage();
    }
  }

  public isEnrolled(event: Event): boolean {
    let enrolled = false;
    event.inscriptions.find((inscription) => {
      enrolled = inscription.userId === this.client ? true : false;
    });
    return enrolled;
  }

  public openDialog(event: Event): void {
    const enrolled = this.isEnrolled(event);
    const showButton =
      (event.state === EventState.OPEN ||
        event.state === EventState.POSTPONED) &&
      !enrolled
        ? true
        : false;
    const dialog = this.dialog.open(ModalComponent, {
      data: {
        event,
        enrolled,
        showButton,
      },
    });
    dialog.afterClosed().subscribe(() => this.loadData());
  }

  private loadData(): void {
    const subscription = this.findAllEvents()
      .pipe(
        finalize(() => {
          this.events.sort = this.sort;
          this.events.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.events = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private findAllEvents(): Observable<Event[]> {
    return this.service.getAuthorities()[0] === SharedConstants.ROLES.ADMIN
      ? this.service.findAllEvents()
      : this.service.findAllEventsForContact();
  }
}
