import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AdvisoryReport } from '../models/advisory-report.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class AdvisoryReportService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.ADVISORY_REPORT}`;

  constructor(private http: HttpClient) {}

  public getGeneralReport(): Observable<AdvisoryReport[]> {
    return this.http.get<AdvisoryReport[]>(`${AdvisoryReportService.ENDPOINT}`);
  }

  public getGeneralReportBetweenDates(): Observable<AdvisoryReport[]> {
    return null; // TODO
  }

  public countHoursByConsultantWithoutPreparation(
    idConsultant: string,
  ): Observable<number> {
    return this.http.get<number>(
      `${AdvisoryReportService.ENDPOINT}/count-hours/consultant/${idConsultant}`,
    );
  }

  public countHoursByConsultantWithoutPreparationBetweenDates(
    consultantId: string,
    startDate: Date,
    endDate: Date,
  ): Observable<number> {
    const criteria = { startDate, endDate };
    return this.http.get<number>(
      `${
        AdvisoryReportService.ENDPOINT
      }/count-hours/consultant/${consultantId}/between-dates?criteria=${encodeURIComponent(
        JSON.stringify(criteria),
      )}`,
    );
  }

  public countAdvisoriesByConsultantBetweenDates(
    consultantId: string,
    startDate: Date,
    endDate: Date,
  ): Observable<number> {
    const criteria = { startDate, endDate };
    return this.http.get<number>(
      `${
        AdvisoryReportService.ENDPOINT
      }/count-advisories/consultant/${consultantId}/between-dates/?criteria=${encodeURIComponent(
        JSON.stringify(criteria),
      )}`,
    );
  }
}
