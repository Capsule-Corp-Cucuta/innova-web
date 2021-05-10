import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdvisoryRoutingModule } from './advisory-routing.module';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdvisoryRoutingModule,
  ],
})
export class AdvisoryModule {}
