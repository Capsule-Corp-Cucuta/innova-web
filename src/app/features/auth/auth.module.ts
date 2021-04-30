import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotPassComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
