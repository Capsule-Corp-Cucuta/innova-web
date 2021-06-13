import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { UserRoutingModule } from './user-routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [FormComponent, ModalComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
