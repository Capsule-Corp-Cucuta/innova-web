import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [TableComponent, FormComponent, ModalComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, CommonModule, EventRoutingModule],
})
export class EventModule {}
