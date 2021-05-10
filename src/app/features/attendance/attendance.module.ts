import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [CommonModule, AttendanceRoutingModule],
})
export class AttendanceModule {}
