import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { Advisory } from '../../core/models/advisory.model';

@Injectable({
  providedIn: 'root',
})
export class AdvisoryServiceStub {
  public create(advisory: Advisory): Observable<Boolean> {
    return of(true);
  }

  public update(advisory: Advisory): Observable<Boolean> {
    return of(true);
  }

  public findByID(id: number): Observable<Advisory> {
    return of(TestUtils.advisory);
  }

  public findByConsultatn(id: string): Observable<Advisory[]> {
    return of(TestUtils.advisorys);
  }

  public findAll(): Observable<Advisory[]> {
    return of(TestUtils.advisorys);
  }
}
