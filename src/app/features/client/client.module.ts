import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormViewComponent } from './form-view/form-view.component';

@NgModule({
  declarations: [TableComponent, FormComponent, FormViewComponent],
  imports: [FormsModule, CommonModule, SharedModule, ClientRoutingModule, ReactiveFormsModule],
})
export class ClientModule {}
