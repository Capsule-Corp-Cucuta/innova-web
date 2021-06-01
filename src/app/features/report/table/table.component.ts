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

  public reports: any[] = [];
  public consultants: Consultant[];
  public consultantId: string;
  public startDate: Date;
  public closeDate: Date;
  public error = false;
  public empty = false;

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.loadConsultants();
  }

  public loadReport(e: Event): void {
    if (this.consultantId) {
      this.error = false;
      this.empty = true;
      this.service
        .reportHours(this.consultantId, this.startDate, this.closeDate)
        .subscribe((resp) => {
          this.reports = resp;
        });
    } else {
      this.error = true;
      this.empty = false;
    }
  }

  public exportAsXLSX(): void {
    if (this.reports.length > 0) {
      this.service.exporterToExcel(this.reports, this.FILENAME.HOUR);
    }
  }

  private loadConsultants() {
    this.service.findAllConsultant().subscribe((resp) => {
      this.consultants = resp;
    });
  }
}
