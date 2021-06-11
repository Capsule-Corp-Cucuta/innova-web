import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { InnovaEvent } from 'src/app/core/models/innova-event.model';

@Injectable({
  providedIn: 'root',
})
export class EventServiceStub {
  public create(event: Event): Observable<Response> {
    return of(null);
  }

  public update(event: Event): Observable<Response> {
    return of(null);
  }

  public findByID(id: number): Observable<InnovaEvent> {
    return of(TestUtils.event);
  }

  public findByClient(id: string): Observable<InnovaEvent[]> {
    return of(TestUtils.events);
  }

  public findAll(): Observable<InnovaEvent[]> {
    return of(TestUtils.events);
  }
}
