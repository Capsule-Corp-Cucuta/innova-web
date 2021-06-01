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

  public create(consultant: Consultant): Observable<Boolean> {
    return this.http.post<Boolean>(ConsultantService.ENDPOINT, consultant);
  }

  public update(consultant: Consultant): Observable<Boolean> {
    return this.http.put<Boolean>(
      ConsultantService.ENDPOINT + '/' + consultant.id,
      consultant,
    );
  }

  public findByID(id: string): Observable<Consultant> {
    return this.http.get<Consultant>(ConsultantService.ENDPOINT + '/' + id);
  }

  public findAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(ConsultantService.ENDPOINT + '/all');
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
