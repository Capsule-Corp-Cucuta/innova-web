import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from '../models/client.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.CLIENT}`;

  constructor(private http: HttpClient) {}

  public assign(contact: string, consultant: string): Observable<Response> {
    return this.http.post<Response>(
      `${ClientService.ENDPOINT}/${contact}/consultant/${consultant}`,
      {},
    );
  }

  public update(client: Client): Observable<Response> {
    return this.http.put<Response>(
      `${ClientService.ENDPOINT}/${client.id}`,
      client,
    );
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(ClientService.ENDPOINT);
  }

  public findByID(id: string): Observable<Client> {
    return this.http.get<Client>(`${ClientService.ENDPOINT}/${id}`);
  }

  public findByConsultant(id: string): Observable<Client[]> {
    return this.http.get<Client[]>(
      `${ClientService.ENDPOINT}/consultant/${id}`,
    );
  }
}
