import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatePipe } from './pipes/state-pipe';
import { CoreModule } from '../core/core.module';
import { GenderPipe } from './pipes/gender-pipe';
import { OptionPipe } from './pipes/option-pipe';
import { TokenService } from './services/token.service';
import { EventTypePipe } from './pipes/eventType-pipe';
import { FacadeService } from './services/facade.service';
import { EventStatePipe } from './pipes/eventState-pipe';
import { MaterialModule } from './material/material.module';
import { ContactTypePipe } from './pipes/contactType-pipe';
import { CompanyTypePipe } from './pipes/companyType-pipe';
import { EthnicGroupPipe } from './pipes/ethnicGroup-pipe';
import { ExporterService } from './services/exporter.service';
import { AdvisoryAreaPipe } from './pipes/advisoryArea-pipe';
import { AdvisoryTypePipe } from './pipes/advisoryType-pipe';
import { AdvisoryStatePipe } from './pipes/AdvisoryState-pipe';
import { ContactMediumPipe } from './pipes/contactMedium-pipe';
import { EducationLevelPipe } from './pipes/educationalLevel-pipe';
import { SessionGuardService } from './guards/session-guard.service';
import { LegalConstitutionPipe } from './pipes/legalConstitution-pipe';
import { interceptorProvider } from './interceptors/auth-interceptor.service';
import { InternationalActivityPipe } from './pipes/internacionalActivity-pipe';

@NgModule({
  declarations: [
    StatePipe,
    GenderPipe,
    OptionPipe,
    EventTypePipe,
    EventStatePipe,
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
  providers: [TokenService, FacadeService, ExporterService, SessionGuardService, interceptorProvider],
  exports: [
    StatePipe,
    OptionPipe,
    GenderPipe,
    EventTypePipe,
    EventStatePipe,
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
