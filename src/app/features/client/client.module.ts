import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ClientRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule {}
