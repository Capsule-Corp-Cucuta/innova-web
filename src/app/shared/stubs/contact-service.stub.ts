import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Contact } from 'src/app/core/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceStub {
  public create(contact: Contact): Observable<Boolean> {
    return of(true);
  }
}
