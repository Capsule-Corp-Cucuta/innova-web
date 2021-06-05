import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SessionGuardService } from 'src/app/shared/guards/session-guard.service';
import { FormViewComponent } from './form-view/form-view.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    canActivate: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.CREATE,
    component: FormComponent,
    canActivate: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.UPDATE + '/:id',
    component: FormComponent,
    canActivate: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.ASSIGNED,
    component: FormViewComponent,
    canActivate: [SessionGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
