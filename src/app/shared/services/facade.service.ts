import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { TokenService } from './token.service';
import { ExporterService } from './exporter.service';
import { Event } from 'src/app/core/models/event.model';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { Client } from 'src/app/core/models/client.model';
import { Contact } from 'src/app/core/models/contact.model';
import { Advisory } from 'src/app/core/models/advisory.model';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { User, UserLogin } from 'src/app/core/models/user.model';
import { Consultant } from 'src/app/core/models/consultant.model';
import { Inscription } from 'src/app/core/models/inscription.model';
import { EventService } from 'src/app/core/services/event.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { AdvisoryService } from '../../core/services/advisory.service';
import { ConsultantService } from '../../core/services/consultant.service';
import { AttendanceService } from 'src/app/core/services/attendance.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private _authService: AuthService; // tslint:disable-line
  private _tokenService: TokenService; // tslint:disable-line
  private _contactService: ContactService; // tslint:disable-line
  private _clientService: ClientService; // tslint:disable-line
  private _consultantService: ConsultantService; // tslint:disable-line
  private _advisoryService: AdvisoryService; // tslint:disable-line
  private _eventService: EventService; // tslint:disable-line
  private _userService: UserService; // tslint:disable-line
  private _exporterService: ExporterService; // tslint:disable-line
  private _attendanceService: AttendanceService; // tslint:disable-line

  constructor(private injector: Injector) {}

  public get authService(): AuthService {
    if (!this._authService) {
      this._authService = this.injector.get<AuthService>(AuthService);
    }
    return this._authService;
  }

  public get tokenService(): TokenService {
    if (!this._tokenService) {
      this._tokenService = this.injector.get<TokenService>(TokenService);
    }
    return this._tokenService;
  }

  public get contactService(): ContactService {
    if (!this._contactService) {
      this._contactService = this.injector.get<ContactService>(ContactService);
    }
    return this._contactService;
  }

  public get clientService(): ClientService {
    if (!this._clientService) {
      this._clientService = this.injector.get<ClientService>(ClientService);
    }
    return this._clientService;
  }

  public get consultantService(): ConsultantService {
    if (!this._consultantService) {
      this._consultantService =
        this.injector.get<ConsultantService>(ConsultantService);
    }
    return this._consultantService;
  }

  public get advisoryService(): AdvisoryService {
    if (!this._advisoryService) {
      this._advisoryService =
        this.injector.get<AdvisoryService>(AdvisoryService);
    }
    return this._advisoryService;
  }

  public get eventService(): EventService {
    if (!this._eventService) {
      this._eventService = this.injector.get<EventService>(EventService);
    }
    return this._eventService;
  }

  public get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get<UserService>(UserService);
    }
    return this._userService;
  }

  public get exporterService(): ExporterService {
    if (!this._exporterService) {
      this._exporterService =
        this.injector.get<ExporterService>(ExporterService);
    }
    return this._exporterService;
  }

  public get attendanceService(): AttendanceService {
    if (!this._attendanceService) {
      this._attendanceService =
        this.injector.get<AttendanceService>(AttendanceService);
    }
    return this._attendanceService;
  }

  public signin(user: UserLogin): Observable<JwtModel> {
    return this.authService.signin(user);
  }

  public signout(): void {
    return this.authService.signout();
  }

  public setToken(token: string): void {
    this.tokenService.setToken(token);
  }

  public getToken(): string {
    return this.tokenService.getToken();
  }

  public setUser(user: User): void {
    this.tokenService.setUser(user);
  }

  public getUser(): User {
    return JSON.parse(this.tokenService.getUser());
  }

  public setAuthorities(authorities: string[]): void {
    this.tokenService.setAuthorities(authorities);
  }

  public getAuthorities(): string[] {
    return this.tokenService.getAuthorities();
  }

  public enableAndDisableUser(user: string): Observable<Response> {
    return this.userService.disable(user);
  }

  public updateUser(user: User): Observable<Response> {
    return this.userService.update(user);
  }

  public findByIdUser(id: string): Observable<User> {
    return this.userService.findByID(id);
  }

  public findByEmail(email: string): Observable<User> {
    return this.userService.findByEmail(email);
  }

  public changePassword(
    id: string,
    oldPass: string,
    newPass: string,
  ): Observable<Response> {
    return this.userService.changePassword(id, oldPass, newPass);
  }

  public recoverPassword(email: string): Observable<Response> {
    return this.userService.recoverPassword(email);
  }

  public createContact(contact: Contact): Observable<Response> {
    return this.contactService.create(contact);
  }

  public findByIDContact(contactId: string): Observable<Contact> {
    return this.contactService.findById(contactId);
  }
  public updateAccompaniment(contact: string): Observable<Response> {
    return this.contactService.updateAccompaniment(contact);
  }
  public findAllContact(): Observable<Contact[]> {
    return this.contactService.findAll();
  }

  public updateClient(client: Client): Observable<Response> {
    return this.clientService.update(client);
  }
  public findByIDClient(id: string): Observable<Client> {
    return this.clientService.findByID(id);
  }

  public findClientByConsultant(id: string): Observable<Client[]> {
    return this.clientService.findByConsultant(id);
  }
  public findAllClient(): Observable<Client[]> {
    return this.clientService.findAll();
  }

  public assignConsultant(
    contact: string,
    consultant: string,
  ): Observable<Response> {
    return this.clientService.assign(contact, consultant);
  }

  public createConsultant(consultant: Consultant): Observable<Response> {
    return this.consultantService.create(consultant);
  }

  public updateConsultant(consultant: Consultant): Observable<Response> {
    return this.consultantService.update(consultant);
  }
  public findByIDConsultant(id: string): Observable<Consultant> {
    return this.consultantService.findByID(id);
  }

  public findAllConsultant(): Observable<Consultant[]> {
    return this.consultantService.findAll();
  }

  public findAllConsultantActive(): Observable<Consultant[]> {
    return this.consultantService.findAllActive();
  }

  public createAdvisory(advisory: Advisory): Observable<Response> {
    return this.advisoryService.create(advisory);
  }

  public updateAdvisory(advisory: Advisory): Observable<Response> {
    return this.advisoryService.update(advisory);
  }
  public findByIDAdvisory(id: number): Observable<Advisory> {
    return this.advisoryService.findByID(id);
  }

  public findAdvisoryByConsultant(id: string): Observable<Advisory[]> {
    return this.advisoryService.findByConsultant(id);
  }
  public findAdvisoryByClient(id: string): Observable<Advisory[]> {
    return this.advisoryService.findByClient(id);
  }

  public findAllAdvisory(): Observable<Advisory[]> {
    return this.advisoryService.findAll();
  }

  public countFindAdvisoryByConsultantBetweenDates(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<number> {
    return this.advisoryService.countFindAdvisoryByConsultantBetweenDates(
      idConsultant,
      startDate,
      closeDate,
    );
  }
  public countFindAdvisoryByConsultantBetweenDates2(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<Advisory[]> {
    return this.advisoryService.countFindAdvisoryByConsultantBetweenDates2(
      idConsultant,
      startDate,
      closeDate,
    );
  }

  public countFindAdvisoryByConsultant(
    idConsultant: string,
  ): Observable<number> {
    return this.advisoryService.countFindAdvisoryByConsultant(idConsultant);
  }

  public createEvent(event: Event): Observable<Response> {
    return this.eventService.create(event);
  }

  public updateEvent(event: Event): Observable<Response> {
    return this.eventService.update(event);
  }
  public findByIDEvent(id: number): Observable<Event> {
    return this.eventService.findByID(id);
  }

  public findEventByClient(id: string): Observable<Event[]> {
    return this.eventService.findByClient(id);
  }

  public findAllEvent(): Observable<Event[]> {
    return this.eventService.findAll();
  }

  public eventInscription(
    idUser: string,
    idEvent: number,
  ): Observable<Response> {
    return this.eventService.eventInscription(idUser, idEvent);
  }

  public exporterToExcel(data: any[], fileName: string): void {
    return this.exporterService.exportToExcel(data, fileName);
  }

  public findAttendanceByEvent(eventId: number): Observable<Inscription[]> {
    return this.attendanceService.findAttendanceByEvent(eventId);
  }

  public createAttendanceByEvent(
    eventId: number,
    inscription: Inscription[],
  ): Observable<Response> {
    return this.attendanceService.createAttendanceByEvent(eventId, inscription);
  }
}
