import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';

@Injectable({
  providedIn: 'root',
})
export class ReportServiceStub {
  public reportHours(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<any[]> {
    return of(TestUtils.report);
  }
}
