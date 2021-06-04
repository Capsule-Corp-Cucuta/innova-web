import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { Inscription } from 'src/app/core/models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceServiceStub {
  public findAttendanceByEvent(id: number): Observable<Inscription[]> {
    return of(TestUtils.inscriptions);
  }
}
