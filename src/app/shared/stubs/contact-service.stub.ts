import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Contact } from 'src/app/core/models/contact.model';
import { TestUtils } from './TestUtils';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceStub {
  public create(contact: Contact): Observable<Response> {
    return of(null);
  }

  public findAll(): Observable<Contact[]> {
    return of(TestUtils.contacts);
  }

  public assign(contacto: string, asesor: string): Observable<Response> {
    return of(null);
  }

  public findById(id: string): Observable<Contact> {
    return of(TestUtils.contact);
  }
}
