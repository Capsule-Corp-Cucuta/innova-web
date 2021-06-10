import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventInnova } from '../models/event-innova.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.EVENT}`;

  constructor(private http: HttpClient) {}

  public create(event: EventInnova): Observable<Response> {
    return this.http.post<Response>(EventService.ENDPOINT, event);
  }

  public update(event: EventInnova): Observable<Response> {
    return this.http.put<Response>(
      `${EventService.ENDPOINT}/${event.id}`,
      event,
    );
  }

  public findByID(id: number): Observable<EventInnova> {
    return this.http.get<EventInnova>(`${EventService.ENDPOINT}/${id}`);
  }

  public findByClient(id: string): Observable<EventInnova[]> {
    return this.http.get<EventInnova[]>(
      `${EventService.ENDPOINT}/client/${id}`,
    );
  }

  public findAll(): Observable<EventInnova[]> {
    return this.http.get<EventInnova[]>(EventService.ENDPOINT);
  }

  public findAllForContact(): Observable<EventInnova[]> {
    return this.http.get<EventInnova[]>(`${EventService.ENDPOINT}/after-now`);
  }
}
