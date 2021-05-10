import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: UrlConstants.ROUTES.CREATE,
  },
  {
    path: UrlConstants.ROUTES.CREATE,
    component: FormComponent,
  },
  {
    path: UrlConstants.ROUTES.LIST,
    component: TableComponent,
  },
  {
    path: UrlConstants.ROUTES.UPDATE + '/:id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisoryRoutingModule {}
