import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { UrlConstants } from './shared/constants/url-constants';
import { SessionGuardService } from './shared/guards/session-guard.service';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [SessionGuardService],
    canActivateChild: [SessionGuardService],
  },
  {
    path: UrlConstants.ROUTES.SECURITY,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: UrlConstants.ROUTES.ADVISORY,
    loadChildren: () => import('./features/advisory/advisory.module').then((m) => m.AdvisoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
