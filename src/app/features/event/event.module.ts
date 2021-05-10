import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
