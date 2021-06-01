import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportRoutingModule } from './report-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    ReportRoutingModule,
  ],
})
export class ReportModule {}
