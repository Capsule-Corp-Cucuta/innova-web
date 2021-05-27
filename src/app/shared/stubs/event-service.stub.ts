import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { Event } from 'src/app/core/models/event.model';

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

  public findByID(id: number): Observable<Event> {
    return of(TestUtils.event);
  }

  public findByClient(id: string): Observable<Event[]> {
    return of(TestUtils.events);
  }

  public findAll(): Observable<Event[]> {
    return of(TestUtils.events);
  }
}
