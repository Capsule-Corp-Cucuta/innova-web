import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { TokenService } from './token.service';
import { ExporterService } from './exporter.service';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { Client } from 'src/app/core/models/client.model';
import { Contact } from 'src/app/core/models/contact.model';
import { Advisory } from 'src/app/core/models/advisory.model';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { User, UserLogin } from 'src/app/core/models/user.model';
import { Consultant } from 'src/app/core/models/consultant.model';
import { EventService } from 'src/app/core/services/event.service';
import { Inscription } from 'src/app/core/models/inscription.model';
import { InnovaEvent } from 'src/app/core/models/innova-event.model';
import { ClientService } from 'src/app/core/services/client.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { AdvisoryService } from '../../core/services/advisory.service';
import { ConsultantService } from '../../core/services/consultant.service';
import { AdvisoryReport } from 'src/app/core/models/advisory-report.model';
import { InscriptionService } from 'src/app/core/services/inscription.service';
import { AdvisoryReportService } from 'src/app/core/services/advisory-report.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private _authService: AuthService; // tslint:disable-line
  private _tokenService: TokenService; // tslint:disable-line
  private _userService: UserService; // tslint:disable-line
  private _consultantService: ConsultantService; // tslint:disable-line
  private _contactService: ContactService; // tslint:disable-line
  private _clientService: ClientService; // tslint:disable-line
  private _advisoryService: AdvisoryService; // tslint:disable-line
  private _eventService: EventService; // tslint:disable-line
  private _inscriptionService: InscriptionService; // tslint:disable-line
  private _reportsService: AdvisoryReportService; // tslint:disable-line
  private _exporterService: ExporterService; // tslint:disable-line

  constructor(private injector: Injector) {}

  /**
   * Get instances of services
   */
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

  public get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get<UserService>(UserService);
    }
    return this._userService;
  }

  public get consultantService(): ConsultantService {
    if (!this._consultantService) {
      this._consultantService = this.injector.get<ConsultantService>(ConsultantService);
    }
    return this._consultantService;
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

  public get advisoryService(): AdvisoryService {
    if (!this._advisoryService) {
      this._advisoryService = this.injector.get<AdvisoryService>(AdvisoryService);
    }
    return this._advisoryService;
  }

  public get reportsService(): AdvisoryReportService {
    if (!this._reportsService) {
      this._reportsService = this.injector.get<AdvisoryReportService>(AdvisoryReportService);
    }
    return this._reportsService;
  }

  public get eventService(): EventService {
    if (!this._eventService) {
      this._eventService = this.injector.get<EventService>(EventService);
    }
    return this._eventService;
  }

  public get inscriptionService(): InscriptionService {
    if (!this._inscriptionService) {
      this._inscriptionService = this.injector.get<InscriptionService>(InscriptionService);
    }
    return this._inscriptionService;
  }

  public get exporterService(): ExporterService {
    if (!this._exporterService) {
      this._exporterService = this.injector.get<ExporterService>(ExporterService);
    }
    return this._exporterService;
  }

  /**
   * Auth Service methods
   */
  public signin(user: UserLogin): Observable<JwtModel> {
    return this.authService.signin(user);
  }

  public signout(): void {
    return this.authService.signout();
  }

  /**
   * Token Service methods
   * */
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

  /**
   * User Service methods
   * */
  public findByIdUser(id: string): Observable<User> {
    return this.userService.findByID(id);
  }

  public findByEmail(email: string): Observable<User> {
    return this.userService.findByEmail(email);
  }

  public updateUser(user: User): Observable<Response> {
    return this.userService.update(user);
  }

  public enableAndDisableUser(user: string): Observable<Response> {
    return this.userService.disable(user);
  }

  public changePassword(id: string, oldPass: string, newPass: string): Observable<Response> {
    return this.userService.changePassword(id, oldPass, newPass);
  }

  public recoverPassword(email: string): Observable<Response> {
    return this.userService.recoverPassword(email);
  }

  /**
   * Consultant Service methods
   */
  public createConsultant(consultant: Consultant): Observable<Response> {
    return this.consultantService.create(consultant);
  }

  public updateConsultant(consultant: Consultant): Observable<Response> {
    return this.consultantService.update(consultant);
  }

  public findAllConsultant(): Observable<Consultant[]> {
    return this.consultantService.findAll();
  }

  public findByIDConsultant(id: string): Observable<Consultant> {
    return this.consultantService.findByID(id);
  }

  public findAllConsultantActive(): Observable<Consultant[]> {
    return this.consultantService.findAllActive();
  }

  /**
   * Contact Service methods
   */
  public createContact(contact: Contact): Observable<Response> {
    return this.contactService.create(contact);
  }

  public updateClient(client: Client): Observable<Response> {
    return this.clientService.update(client);
  }

  public requestAccompaniment(contact: string): Observable<Response> {
    return this.contactService.requestAccompaniment(contact);
  }

  public findAllContact(): Observable<Contact[]> {
    return this.contactService.findAll();
  }

  public findByIDContact(contactId: string): Observable<Contact> {
    return this.contactService.findById(contactId);
  }

  /**
   * Client Service Methods
   */
  public assignConsultant(contact: string, consultant: string): Observable<Response> {
    return this.clientService.assign(contact, consultant);
  }

  public findAllClient(): Observable<Client[]> {
    return this.clientService.findAll();
  }

  public findByIDClient(id: string): Observable<Client> {
    return this.clientService.findByID(id);
  }

  public findClientByConsultant(id: string): Observable<Client[]> {
    return this.clientService.findByConsultant(id);
  }

  /**
   * Advisory Service methods
   */
  public createAdvisory(advisory: Advisory): Observable<Response> {
    return this.advisoryService.create(advisory);
  }

  public updateAdvisory(advisory: Advisory): Observable<Response> {
    return this.advisoryService.update(advisory);
  }

  public findAllAdvisory(): Observable<Advisory[]> {
    return this.advisoryService.findAll();
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

  /**
   * Reports Service methods
   */
  public getGeneralReport(): Observable<AdvisoryReport[]> {
    return this.reportsService.getGeneralReport();
  }

  public getGeneralReportBetweenDates(startDate: Date, closeDate: Date): Observable<AdvisoryReport[]> {
    return this.reportsService.getGeneralReportBetweenDates(startDate, closeDate);
  }

  public countHoursByConsultantWithoutPreparation(idConsultant: string): Observable<number> {
    return this.reportsService.countHoursByConsultantWithoutPreparation(idConsultant);
  }

  public countHoursByConsultantWithoutPreparationBetweenDates(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<number> {
    return this.reportsService.countHoursByConsultantWithoutPreparationBetweenDates(idConsultant, startDate, closeDate);
  }

  /**
   * Event Service methods
   */
  public createEvent(event: InnovaEvent): Observable<Response> {
    return this.eventService.create(event);
  }

  public updateEvent(event: InnovaEvent): Observable<Response> {
    return this.eventService.update(event);
  }

  public findAllEvents(): Observable<InnovaEvent[]> {
    return this.eventService.findAll();
  }

  public findByIDEvent(id: number): Observable<InnovaEvent> {
    return this.eventService.findByID(id);
  }

  public findAllAfterNow(): Observable<InnovaEvent[]> {
    return this.eventService.findAllAfterNow();
  }

  /**
   * Inscription Service methods
   */
  public inscriptToEvent(idUser: string, idEvent: number): Observable<Response> {
    return this.inscriptionService.inscriptToEvent(idUser, idEvent);
  }

  public takeAttendance(inscriptions: Inscription[]): Observable<Response> {
    return this.inscriptionService.takeAttendance(inscriptions);
  }

  public findInscriptionsByEvent(eventId: number): Observable<Inscription[]> {
    return this.inscriptionService.findInscriptionsByEvent(eventId);
  }

  public deleteInscriptToEvent(idUser: string, idEvent: number): Observable<Response> {
    return this.inscriptionService.deleteInscriptToEvent(idUser, idEvent);
  }

  /**
   * Export Excel methods
   */
  public exporterToExcel(data: any[], fileName: string): void {
    return this.exporterService.exportToExcel(data, fileName);
  }
}
