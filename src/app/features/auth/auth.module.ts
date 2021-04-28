import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [LoginComponent, RecoverPassComponent, SignupComponent, ChangePassComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
