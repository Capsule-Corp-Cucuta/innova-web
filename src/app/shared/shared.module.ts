import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatePipe } from './pipes/state-pipe';
import { CoreModule } from '../core/core.module';
import { GenderPipe } from './pipes/gender-pipe';
import { OptionPipe } from './pipes/option-pipe';
import { TokenService } from './services/token.service';
import { FacadeService } from './services/facade.service';
import { MaterialModule } from './material/material.module';
import { ContactTypePipe } from './pipes/contactType-pipe';
import { CompanyTypePipe } from './pipes/companyType-pipe';
import { EthnicGroupPipe } from './pipes/ethnicGroup-pipe';
import { ContactMediumPipe } from './pipes/contactMedium-pipe';
import { EducationLevelPipe } from './pipes/educationalLevel-pipe';
import { SessionGuardService } from './guards/session-guard.service';
import { LegalConstitutionPipe } from './pipes/legalConstitution-pipe';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { InternationalActivityPipe } from './pipes/internacionalActivity-pipe';
import { AdvisoryAreaPipe } from './pipes/advisoryArea-pipe';
import { AdvisoryStatePipe } from './pipes/AdvisoryState-pipe';
import { AdvisoryTypePipe } from './pipes/advisoryType-pipe';

@NgModule({
  declarations: [
    StatePipe,
    GenderPipe,
    OptionPipe,
    ContactTypePipe,
    CompanyTypePipe,
    EthnicGroupPipe,
    AdvisoryTypePipe,
    AdvisoryAreaPipe,
    AdvisoryStatePipe,
    ContactMediumPipe,
    EducationLevelPipe,
    LegalConstitutionPipe,
    InternationalActivityPipe,
  ],
  imports: [CoreModule, CommonModule, MaterialModule],
  providers: [
    TokenService,
    FacadeService,
    SessionGuardService,
    AuthInterceptorService,
  ],
  exports: [
    StatePipe,
    OptionPipe,
    GenderPipe,
    MaterialModule,
    ContactTypePipe,
    CompanyTypePipe,
    EthnicGroupPipe,
    AdvisoryTypePipe,
    AdvisoryAreaPipe,
    AdvisoryStatePipe,
    ContactMediumPipe,
    EducationLevelPipe,
    LegalConstitutionPipe,
    InternationalActivityPipe,
  ],
})
export class SharedModule {}
