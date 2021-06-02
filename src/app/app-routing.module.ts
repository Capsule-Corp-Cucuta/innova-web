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
    children: [
      {
        path: UrlConstants.ROUTES.ADVISORY,
        loadChildren: () =>
          import('./features/advisory/advisory.module').then(
            (m) => m.AdvisoryModule,
          ),
      },
      {
        path: UrlConstants.ROUTES.ATTENDANCE,
        loadChildren: () =>
          import('./features/attendance/attendance.module').then(
            (m) => m.AttendanceModule,
          ),
      },
      {
        path: UrlConstants.ROUTES.CLIENT,
        loadChildren: () =>
          import('./features/client/client.module').then((m) => m.ClientModule),
      },
      {
        path: UrlConstants.ROUTES.CONSULTANT,
        loadChildren: () =>
          import('./features/consultant/consultant.module').then(
            (m) => m.ConsultantModule,
          ),
      },
      {
        path: UrlConstants.ROUTES.EVENT,
        loadChildren: () =>
          import('./features/event/event.module').then((m) => m.EventModule),
      },
      {
        path: UrlConstants.ROUTES.CONTACT,
        loadChildren: () =>
          import('./features/contact/contact.module').then(
            (m) => m.ContactModule,
          ),
      },
      {
        path: UrlConstants.ROUTES.USER,
        loadChildren: () =>
          import('./features/user/user.module').then((m) => m.UserModule),
      },
      {
        path: UrlConstants.ROUTES.REPORT,
        loadChildren: () =>
          import('./features/report/report.module').then((m) => m.ReportModule),
      },
    ],
  },
  {
    path: UrlConstants.ROUTES.SECURITY,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
