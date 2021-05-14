import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatePipe } from './pipes/state-pipe';
import { CoreModule } from '../core/core.module';
import { TokenService } from './services/token.service';
import { FacadeService } from './services/facade.service';
import { MaterialModule } from './material/material.module';
import { SessionGuardService } from './guards/session-guard.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

@NgModule({
  declarations: [StatePipe],
  imports: [CoreModule, CommonModule, MaterialModule],
  providers: [
    TokenService,
    FacadeService,
    SessionGuardService,
    AuthInterceptorService,
  ],
  exports: [StatePipe, MaterialModule],
})
export class SharedModule {}
