import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { EventInnova } from 'src/app/core/models/event-innova.model';

@Injectable({
  providedIn: 'root',
})
export class EventServiceStub {
  public create(event: Event): Observable<Boolean> {
    return of(true);
  }

  public update(event: Event): Observable<Boolean> {
    return of(true);
  }

  public findByID(id: number): Observable<EventInnova> {
    return of(TestUtils.event);
  }

  public findByClient(id: string): Observable<EventInnova[]> {
    return of(TestUtils.events);
  }

  public findAll(): Observable<EventInnova[]> {
    return of(TestUtils.events);
  }
}
