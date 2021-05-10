import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
