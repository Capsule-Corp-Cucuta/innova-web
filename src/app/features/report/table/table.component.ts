import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Consultant } from 'src/app/core/models/consultant.model';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROLES = SharedConstants.ROLES;
  public readonly FILENAME = SharedConstants.FILENAMES;
  public readonly LABELS = LabelConstants.LABELS.REPORT.LIST;

  public report: any;
  public error = false;
  public empty = false;
  public startDate: null;
  public closeDate: null;
  public authority: string;
  public isLoading = false;
  public reports: any[] = [];
  public consultantId: string;
  public consultants: Consultant[];

  private subscriptions: Subscription[] = [];

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public clear(): void {
    this.closeDate = null;
    this.consultantId = null;
    this.startDate = null;
  }

  public loadReport(e: Event): void {
    e.preventDefault();
    const id = this.authority == this.ROLES.ADMIN ? this.consultantId : this.service.getUser().id;

    if (id == null && this.startDate == null && this.closeDate == null) {
      this.countGeneralReport();
    } else if (id == null && this.startDate != null && this.closeDate != null) {
      this.countGeneralReportBetweenDates();
    } else if (id != null && this.startDate == null && this.closeDate == null) {
      this.countHoursByConsultantWithoutPreparation(id);
    } else if (id != null && this.startDate != null && this.closeDate != null) {
      this.countHoursByConsultantWithoutPreparationBetweenDates(id);
    }
  }

  private countHoursByConsultantWithoutPreparationBetweenDates(id: string): void {
    this.isLoading = true;
    const subscription = this.service
      .countHoursByConsultantWithoutPreparationBetweenDates(id, this.startDate, this.closeDate)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((resp) => {
        this.reports = [];
        this.reports = [
          {
            asesor: id,
            fecha_inicial: this.startDate,
            fecha_fin: this.closeDate,
            horas: resp,
          },
        ];
      });
    this.subscriptions.push(subscription);
  }

  private countHoursByConsultantWithoutPreparation(id: string): void {
    this.isLoading = true;
    const subscription = this.service
      .countHoursByConsultantWithoutPreparation(id)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((resp) => {
        this.reports = [];
        this.reports = [
          {
            asesor: id,
            fecha_inicial: null,
            fecha_fin: null,
            horas: resp,
          },
        ];
      });
    this.subscriptions.push(subscription);
  }

  private countGeneralReport(): void {
    this.isLoading = true;
    const reportSubscription = this.service
      .getGeneralReport()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((reports) => {
        this.reports = [];
        reports.forEach((report) => {
          this.reports.push({
            asesor: report.consultant.id,
            fecha_inicial: null,
            fecha_fin: null,
            horas: report.advisoryHours,
          });
        });
      });
    this.subscriptions.push(reportSubscription);
  }

  private countGeneralReportBetweenDates(): void {
    this.isLoading = true;
    const reportSubscription = this.service
      .getGeneralReportBetweenDates(this.startDate, this.closeDate)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((reports) => {
        this.reports = [];
        reports.forEach((report) => {
          this.reports.push({
            asesor: report.consultant.id,
            fecha_inicial: this.startDate,
            fecha_fin: this.closeDate,
            horas: report.advisoryHours,
          });
        });
      });
    this.subscriptions.push(reportSubscription);
  }

  public exportAsXLSX(): void {
    this.service.exporterToExcel(this.reports, this.FILENAME.HOUR);
  }

  private loadData() {
    const findConsultantsSubscription = this.service.findAllConsultant().subscribe((resp) => {
      this.consultants = resp;
      this.authority == this.ROLES.ADMIN
        ? this.countGeneralReport()
        : this.countHoursByConsultantWithoutPreparation(this.service.getUser().id);
    });
    this.subscriptions.push(findConsultantsSubscription);
  }
}
