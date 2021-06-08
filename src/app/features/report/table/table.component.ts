import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/core/models/consultant.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit {
  public readonly LABELS = LabelConstants.LABELS.REPORT.LIST;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly FILENAME = SharedConstants.FILENAMES;
  public readonly ROLES = SharedConstants.ROLES;

  public reports: any[] = [];
  public report: any;
  public consultants: Consultant[];
  public consultantId: string;
  public startDate: null;
  public closeDate: null;
  public error = false;
  public empty = false;
  public authority: string;

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.loadConsultants();
  }

  public loadReport(e: Event): void {
    e.preventDefault();
    if (this.startDate != null && this.closeDate != null) {
      const id =
        this.authority == this.ROLES.ADMIN
          ? this.consultantId
          : this.service.getUser().id;
      this.countFindAdvisoryByConsultantBetweenDates(id);
    } else {
      const id =
        this.authority == this.ROLES.ADMIN
          ? this.consultantId
          : this.service.getUser().id;
      this.countFindAdvisoryByConsultant(id);
    }
  }

  private countFindAdvisoryByConsultantBetweenDates(id: string): void {
    if (id) {
      this.error = false;
      this.service
        .countFindAdvisoryByConsultantBetweenDates(
          this.consultantId,
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
    } else {
      this.error = true;
      this.empty = false;
    }
  }

  private countFindAdvisoryByConsultant(id: string): void {
    if (id) {
      this.error = false;
      this.service.countFindAdvisoryByConsultant(id).subscribe((resp) => {
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

  private loadConsultants() {
    this.service.findAllConsultant().subscribe((resp) => {
      this.consultants = resp;
    });
  }
}
