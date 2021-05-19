import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Client } from '../../core/models/client.model';
import { TestUtils } from './TestUtils';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceStub {
  public update(client: Client): Observable<Boolean> {
    return of(true);
  }

  public findByID(id: string): Observable<Client> {
    return of(TestUtils.client);
  }

  public findAll(): Observable<Client[]> {
    return of(TestUtils.clients);
  }
}
