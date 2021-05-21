import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { Consultant } from '../../core/models/consultant.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultantServiceStub {
  public create(consultant: Consultant): Observable<Boolean> {
    return of(true);
  }

  public update(consultant: Consultant): Observable<Boolean> {
    return of(true);
  }

  public findByID(id: string): Observable<Consultant> {
    return of(TestUtils.consultant);
  }
  public findAll(): Observable<Consultant[]> {
    return of(TestUtils.consultants);
  }
}
