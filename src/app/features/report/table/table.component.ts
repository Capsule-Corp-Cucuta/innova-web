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
  public report: any;
  public consultants: Consultant[];
  public consultantId: string;
  public startDate: null;
  public closeDate: null;
  public error = false;
  public empty = false;

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.loadConsultants();
  }

  public loadReport(e: Event): void {
    if (this.consultantId) {
      this.error = false;
      this.service
        .findAdvisoryByConsultantBetweenDates(
          this.consultantId,
          this.startDate,
          this.closeDate,
        )
        .subscribe((resp) => {
          console.log(resp);

          this.report = {
            consultand: this.consultantId,
            startDate: this.startDate,
            closeDate: this.closeDate,
            hour: resp,
          };
          this.empty = true;
        });
    } else {
      this.error = true;
      this.empty = false;
    }
  }

  public exportAsXLSX(): void {
    if (this.empty) {
      this.service.exporterToExcel(this.report, this.FILENAME.HOUR);
    }
  }

  private loadConsultants() {
    this.service.findAllConsultant().subscribe((resp) => {
      this.consultants = resp;
    });
  }
}
