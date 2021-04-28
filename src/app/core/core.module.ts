import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { ClientService } from './services/client.service';
import { ContactService } from './services/contact.service';
import { DirectorService } from './services/director.service';
import { AdvisoryService } from './services/advisory.service';
import { ConsultantService } from './services/consultant.service';
import { AttendanceService } from './services/attendance.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    UserService,
    DirectorService,
    ConsultantService,
    ContactService,
    ClientService,
    AdvisoryService,
    EventService,
    AttendanceService,
  ],
})
export class CoreModule {}
