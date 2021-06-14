import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { Client } from '../../core/models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceStub {
  public update(client: Client): Observable<Response> {
    return of(null);
  }

  public findByID(id: string): Observable<Client> {
    return of(TestUtils.client);
  }

  public findClientByConsultant(id: string): Observable<Client[]> {
    return of(TestUtils.clients);
  }

  public findAll(): Observable<Client[]> {
    return of(TestUtils.clients);
  }
}
