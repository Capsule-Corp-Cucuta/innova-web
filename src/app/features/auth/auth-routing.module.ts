import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UrlConstants } from '../../shared/constants/url-constants';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: UrlConstants.ROUTES.SIGNIN,
  },
  {
    path: UrlConstants.ROUTES.SIGNIN,
    component: SigninComponent,
  },
  {
    path: UrlConstants.ROUTES.SIGNUP,
    component: SignupComponent,
  },
  {
    path: UrlConstants.ROUTES.FORGOT_PASS,
    component: ForgotPassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
