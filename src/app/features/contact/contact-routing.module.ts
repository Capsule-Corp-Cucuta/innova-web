import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { SessionGuardService } from 'src/app/shared/guards/session-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    canActivate: [SessionGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
