import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotPassComponent],
  imports: [FormsModule, CommonModule, SharedModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
