import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ConsultantRoutingModule } from './consultant-routing.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [CommonModule, ConsultantRoutingModule],
})
export class ConsultantModule {}
