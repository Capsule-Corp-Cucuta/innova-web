import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, AttendanceRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class AttendanceModule {}
