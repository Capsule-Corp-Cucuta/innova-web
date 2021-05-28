import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SessionGuardService } from 'src/app/shared/guards/session-guard.service';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.UPDATE + '/:id',
    component: FormComponent,
    canActivate: [SessionGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
