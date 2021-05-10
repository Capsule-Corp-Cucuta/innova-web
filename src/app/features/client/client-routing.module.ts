import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: UrlConstants.ROUTES.CREATE,
    component: FormComponent,
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
export class ClientRoutingModule {}
