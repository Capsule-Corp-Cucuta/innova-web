import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SessionGuardService } from 'src/app/shared/guards/session-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    canActivate: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.UPDATE + '/:id/:state',
    component: TableComponent,
    canActivate: [SessionGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
