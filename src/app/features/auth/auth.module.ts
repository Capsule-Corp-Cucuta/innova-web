import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotPassComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
