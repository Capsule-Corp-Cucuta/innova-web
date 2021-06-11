import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';

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

  public loadReport(e: Event): void {
    e.preventDefault();
    const id =
      this.authority == this.ROLES.ADMIN
        ? this.consultantId
        : this.service.getUser().id;

    this.startDate != null && this.closeDate != null
      ? this.countHoursByConsultantWithoutPreparationBetweenDates(id)
      : this.countHoursByConsultantWithoutPreparation(id);
  }

  private countHoursByConsultantWithoutPreparationBetweenDates(
    id: string,
  ): void {
    if (id) {
      this.error = false;
      const subscription = this.service
        .countHoursByConsultantWithoutPreparationBetweenDates(
          id,
          this.startDate,
          this.closeDate,
        )
        .subscribe((resp) => {
          this.reports = [
            {
              consultant: id,
              startDate: this.startDate,
              closeDate: this.closeDate,
              hour: resp,
            },
          ];
          this.empty = true;
        });
      this.subscriptions.push(subscription);
    } else {
      this.error = true;
      this.empty = false;
    }
  }

  private countHoursByConsultantWithoutPreparation(id: string): void {
    if (id) {
      this.error = false;
      this.isLoading = true;
      const subscription = this.service
        .countHoursByConsultantWithoutPreparation(id)
        .subscribe((resp) => {
          this.isLoading = false;
          this.reports = [
            {
              consultant: id,
              startDate: null,
              closeDate: null,
              hour: resp,
            },
          ];
          this.empty = true;
        });
      this.subscriptions.push(subscription);
    } else {
      this.error = true;
      this.empty = false;
    }
  }

  public exportAsXLSX(): void {
    if (this.empty) {
      this.service.exporterToExcel(this.reports, this.FILENAME.HOUR);
    }
  }

  private loadData() {
    this.isLoading = true;
    const findConsultantsSubscription = this.service
      .findAllConsultant()
      .subscribe((resp) => {
        this.consultants = resp;
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
                consultant: report.consultant.id,
                startDate: null,
                closeDate: null,
                hour: report.advisoryHours,
              });
            });
            this.empty = true;
          });
        this.subscriptions.push(reportSubscription);
      });
    this.subscriptions.push(findConsultantsSubscription);
  }
}
