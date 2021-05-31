import { Component, OnInit } from '@angular/core';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit {
  public readonly LABELS = LabelConstants.LABELS.REPORT.LIST;

  public reports: [];

  constructor() {}

  ngOnInit(): void {}

  private loadReport(): void {
    //TODO
  }
}
