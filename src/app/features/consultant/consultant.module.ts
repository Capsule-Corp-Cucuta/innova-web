import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ConsultantRoutingModule } from './consultant-routing.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ConsultantRoutingModule,
  ],
})
export class ConsultantModule {}
