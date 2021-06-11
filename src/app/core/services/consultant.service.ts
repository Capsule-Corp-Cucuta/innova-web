import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Consultant } from '../models/consultant.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

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
      `${ConsultantService.ENDPOINT}/${consultant.id}`,
      consultant,
    );
  }

  public findAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(ConsultantService.ENDPOINT);
  }

  public findByID(id: string): Observable<Consultant> {
    return this.http.get<Consultant>(`${ConsultantService.ENDPOINT}/${id}`);
  }

  public findAllActive(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${ConsultantService.ENDPOINT}/active`);
  }
}
