import { finalize } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { EventState, InnovaEvent } from 'src/app/core/models/innova-event.model';
import { InnovaEventExcel } from 'src/app/core/models/innova-event-excel.model';

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
  public readonly FILENAME = SharedConstants.FILENAMES;

  public client: string;
  public filter = '';
  public authority: string;
  public isLoading = false;
  public events: MatTableDataSource<InnovaEvent>;

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

  public isEnrolled(event: InnovaEvent): boolean {
    return event.inscriptions.find((inscription) => {
      return inscription.userId === this.client;
    })
      ? true
      : false;
  }

  public openDialog(event: InnovaEvent): void {
    const enrolled = this.isEnrolled(event);
    const showButton =
      (event.state === EventState.ABIERTO || event.state === EventState.POSPUESTO) && !enrolled ? true : false;
    const dialog = this.dialog.open(ModalComponent, {
      data: {
        event,
        enrolled,
        showButton,
      },
    });
    dialog.afterClosed().subscribe(() => this.loadData());
  }

  public showEdit(event: InnovaEvent): boolean {
    return this.authority === this.ROLES.ADMIN && event.state !== EventState.COMPLETADO;
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.convertToExcel(this.events.data), this.FILENAME.EVENT);
    } else {
      this.service.exporterToExcel(this.convertToExcel(this.events.filteredData), this.FILENAME.EVENT);
    }
  }

  private loadData(): void {
    this.isLoading = true;
    const subscription = this.findAllEvents()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.events.sort = this.sort;
          this.events.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.events = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private findAllEvents(): Observable<InnovaEvent[]> {
    return this.service.getAuthorities()[0] === SharedConstants.ROLES.ADMIN
      ? this.service.findAllEvents()
      : this.service.findAllAfterNow();
  }

  private convertToExcel(events: InnovaEvent[]): InnovaEventExcel[] {
    const eventsConverted: InnovaEventExcel[] = [];
    events.forEach((event) => {
      eventsConverted.push({
        id: event.id.toString(),
        titulo: event.title,
        tema: event.theme,
        descripcion: event.description,
        tipo_evento: event.type,
        estado_evento: event.state,
        fecha_inicial: event.startDate.toString(),
        fecha_fin: event.closeDate.toString(),
        fecha_limite_inscripcion: event.registrationDeadlineDate.toString(),
        duracion_evento: event.eventDurationInHours.toString(),
        departamento: event.department ? event.department : '',
        ciudad: event.city ? event.city : '',
        lugar: event.place ? event.place : '',
        email_contacto: event.email,
        link_evento: event.link ? event.link : '',
      });
    });
    return eventsConverted;
  }
}
