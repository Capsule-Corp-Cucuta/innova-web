import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { TokenService } from './services/token.service';
import { FacadeService } from './services/facade.service';
import { MaterialModule } from './material/material.module';
import { SessionGuardService } from './guards/session-guard.service';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { StatePipe } from './pipes/state-pipe';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent,StatePipe],
  imports: [CommonModule, CoreModule, MaterialModule],
  providers: [FacadeService, TokenService, SessionGuardService, AuthInterceptorService],
  exports: [LayoutComponent, HeaderComponent, SidenavComponent, MaterialModule,StatePipe],
})
export class SharedModule {}
