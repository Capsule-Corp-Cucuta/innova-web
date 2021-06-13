import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [CommonModule, AttendanceRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class AttendanceModule {}
