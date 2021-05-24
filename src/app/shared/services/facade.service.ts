import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { TokenService } from './token.service';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserLogin } from 'src/app/core/models/user.model';
import { ContactService } from 'src/app/core/services/contact.service';
import { ClientService } from 'src/app/core/services/client.service';
import { Contact } from 'src/app/core/models/contact.model';
import { Client } from 'src/app/core/models/client.model';
import { ConsultantService } from '../../core/services/consultant.service';
import { Consultant } from 'src/app/core/models/consultant.model';
import { AdvisoryService } from '../../core/services/advisory.service';
import { Advisory } from 'src/app/core/models/advisory.model';

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
      this._consultantService = this.injector.get<ConsultantService>(
        ConsultantService,
      );
    }
    return this._consultantService;
  }

  public get advisoryService(): AdvisoryService {
    if (!this._advisoryService) {
      this._advisoryService = this.injector.get<AdvisoryService>(
        AdvisoryService,
      );
    }
    return this._advisoryService;
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

  public setUser(id: string): void {
    this.tokenService.setUser(id);
  }

  public getUser(): string {
    return this.tokenService.getUser();
  }

  public setAuthorities(authorities: string[]): void {
    this.tokenService.setAuthorities(authorities);
  }

  public getAuthorities(): string[] {
    return this.tokenService.getAuthorities();
  }

  public createContact(contact: Contact): Observable<Boolean> {
    return this.contactService.create(contact);
  }

  public findAllContact(): Observable<Contact[]> {
    return this.contactService.findAll();
  }

  public updateClient(client: Client): Observable<Boolean> {
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

  public createConsultant(consultant: Consultant): Observable<Boolean> {
    return this.consultantService.create(consultant);
  }

  public updateConsultant(consultant: Consultant): Observable<Boolean> {
    return this.consultantService.update(consultant);
  }
  public findByIDConsultant(id: string): Observable<Consultant> {
    return this.consultantService.findByID(id);
  }

  public findAllConsultant(): Observable<Consultant[]> {
    return this.consultantService.findAll();
  }

  public createAdvisory(advisory: Advisory): Observable<Boolean> {
    return this.advisoryService.create(advisory);
  }

  public updateAdvisory(advisory: Advisory): Observable<Boolean> {
    return this.advisoryService.update(advisory);
  }
  public findByIDAdvisory(id: string): Observable<Advisory> {
    return this.advisoryService.findByID(id);
  }

  public findAdvisoryByConsultant(id: string): Observable<Advisory[]> {
    return this.advisoryService.findByConsultant(id);
  }

  public findAllAdvisory(): Observable<Advisory[]> {
    return this.advisoryService.findAll();
  }
}
