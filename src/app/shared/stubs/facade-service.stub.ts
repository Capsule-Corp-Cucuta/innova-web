import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthServiceStub } from './auth-service.stub';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { User, UserLogin } from 'src/app/core/models/user.model';
import { TokenServiceStub } from './token-service.stub';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactServiceStub } from './contact-service.stub';
import { Client } from 'src/app/core/models/client.model';
import { ClientServiceStub } from './cliente-service.stub';
import { ConsultantServiceStub } from './consultant-service.stub';
import { Consultant } from '../../core/models/consultant.model';
import { AdvisoryServiceStub } from './advisory-service.stub';
import { Advisory } from '../../core/models/advisory.model';
import { EventServiceStub } from './event-service.stub';
import { Event } from 'src/app/core/models/event.model';
import { UserServiceStub } from './user-service.stub';
import { ReportServiceStub } from './report-service.stub';
import { AttendanceServiceStub } from './attendance-service.stub';
import { Inscription } from 'src/app/core/models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class FacadeServiceStub {
  private authServiceStub: AuthServiceStub;
  private tokenServiceStub: TokenServiceStub;
  private contactServiceStub: ContactServiceStub;
  private clientServiceStub: ClientServiceStub;
  private consultantServiveStub: ConsultantServiceStub;
  private advisoryServiceStub: AdvisoryServiceStub;
  private eventServiceStub: EventServiceStub;
  private userServiceStub: UserServiceStub;
  private reportServiceStub: ReportServiceStub;
  private attendanceServiceStub: AttendanceServiceStub;

  constructor() {
    this.authServiceStub = new AuthServiceStub();
    this.tokenServiceStub = new TokenServiceStub();
    this.contactServiceStub = new ContactServiceStub();
    this.clientServiceStub = new ClientServiceStub();
    this.consultantServiveStub = new ConsultantServiceStub();
    this.advisoryServiceStub = new AdvisoryServiceStub();
    this.eventServiceStub = new EventServiceStub();
    this.userServiceStub = new UserServiceStub();
    this.reportServiceStub = new ReportServiceStub();
    this.attendanceServiceStub = new AttendanceServiceStub();
  }

  public signin(user: UserLogin): Observable<JwtModel> {
    return this.authServiceStub.signin(user);
  }

  public signout(): void {
    return this.authServiceStub.signout();
  }

  public setToken(token: string): void {
    this.tokenServiceStub.setToken(token);
  }

  public getToken(): string {
    return this.tokenServiceStub.getToken();
  }

  public setUser(id: string): void {
    this.tokenServiceStub.setUser(id);
  }

  public getUser(): string {
    return this.tokenServiceStub.getUser();
  }

  public setAuthorities(authorities: string[]): void {
    this.tokenServiceStub.setAuthorities(authorities);
  }

  public getAuthorities(): string[] {
    return this.tokenServiceStub.getAuthorities();
  }

  public createContact(contact: Contact): Observable<Boolean> {
    return this.contactServiceStub.create(contact);
  }

  public findByIDContact(id: string): Observable<Contact> {
    return this.contactServiceStub.findById(id);
  }

  public findAllContact(): Observable<Contact[]> {
    return this.contactServiceStub.findAll();
  }

  public assignConsultant(
    contacto: string,
    asesor: string,
  ): Observable<Boolean> {
    return this.contactServiceStub.assign(contacto, asesor);
  }

  public updateClient(client: Client): Observable<Boolean> {
    return this.clientServiceStub.update(client);
  }

  public findByIDClient(id: string): Observable<Client> {
    return this.clientServiceStub.findByID(id);
  }
  public findClientByConsultant(id: string): Observable<Client[]> {
    return this.clientServiceStub.findClientByConsultant(id);
  }

  public findAllClient(): Observable<Client[]> {
    return this.clientServiceStub.findAll();
  }

  public createConsultant(consultant: Consultant): Observable<Boolean> {
    return this.consultantServiveStub.create(consultant);
  }
  public updateConsultant(consultant: Consultant): Observable<Boolean> {
    return this.consultantServiveStub.update(consultant);
  }

  public findByIDConsultant(id: string): Observable<Consultant> {
    return this.consultantServiveStub.findByID(id);
  }

  public findAllConsultant(): Observable<Consultant[]> {
    return this.consultantServiveStub.findAll();
  }

  public createAdvisory(advisory: Advisory): Observable<Boolean> {
    return this.advisoryServiceStub.create(advisory);
  }
  public updateAdvisory(advisory: Advisory): Observable<Boolean> {
    return this.advisoryServiceStub.update(advisory);
  }

  public findByIDAdvisory(id: number): Observable<Advisory> {
    return this.advisoryServiceStub.findByID(id);
  }

  public findAdvisoryByConsultant(id: string): Observable<Advisory[]> {
    return this.advisoryServiceStub.findByConsultatn(id);
  }
  public findAllAdvisory(): Observable<Advisory[]> {
    return this.advisoryServiceStub.findAll();
  }

  public createEvent(event: Event): Observable<Boolean> {
    return this.eventServiceStub.create(event);
  }
  public updateEvent(event: Event): Observable<Boolean> {
    return this.eventServiceStub.update(event);
  }

  public findByIDEvent(id: number): Observable<Event> {
    return this.eventServiceStub.findByID(id);
  }

  public findEventByClient(id: string): Observable<Event[]> {
    return this.eventServiceStub.findByClient(id);
  }
  public findAllEvent(): Observable<Event[]> {
    return this.eventServiceStub.findAll();
  }

  public updateUser(user: User): Observable<Boolean> {
    return this.userServiceStub.update(user);
  }

  public findByIdUser(id: string): Observable<User> {
    return this.userServiceStub.findByID(id);
  }

  public reportHours(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<any[]> {
    return this.reportServiceStub.reportHours(
      idConsultant,
      startDate,
      closeDate,
    );
  }

  public findAttendanceByEvent(id: number): Observable<Inscription[]> {
    return this.attendanceServiceStub.findAttendanceByEvent(id);
  }
}
