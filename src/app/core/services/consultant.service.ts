import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';
import { Consultant } from '../models/consultant.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultantService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.CONSULTANT}`;

  constructor(private http: HttpClient) {}

  public create(consultant: Consultant): Observable<Response> {
    return this.http.post<Response>(ConsultantService.ENDPOINT, consultant);
  }

  public update(consultant: Consultant): Observable<Response> {
    return this.http.put<Response>(
      ConsultantService.ENDPOINT + '/' + consultant.id,
      consultant,
    );
  }

  public findByID(id: string): Observable<Consultant> {
    return this.http.get<Consultant>(ConsultantService.ENDPOINT + '/' + id);
  }

  public findAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(ConsultantService.ENDPOINT);
  }

  public findAllActive(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(ConsultantService.ENDPOINT + '/active');
  }

  public reportHours(
    idConsultant: string,
    startDate: Date,
    closeDate: Date,
  ): Observable<any[]> {
    return this.http.post<any[]>(
      `${ConsultantService.ENDPOINT}/${idConsultant}/report?startDate=${startDate}&closeDate=${closeDate}`,
      {},
    );
  }
}
