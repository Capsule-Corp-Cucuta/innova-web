import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InnovaEvent } from '../models/innova-event.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.EVENT}`;

  constructor(private http: HttpClient) {}

  public create(event: InnovaEvent): Observable<Response> {
    return this.http.post<Response>(EventService.ENDPOINT, event);
  }

  public update(event: InnovaEvent): Observable<Response> {
    return this.http.put<Response>(
      `${EventService.ENDPOINT}/${event.id}`,
      event,
    );
  }

  public findAll(): Observable<InnovaEvent[]> {
    return this.http.get<InnovaEvent[]>(EventService.ENDPOINT);
  }

  public findByID(id: number): Observable<InnovaEvent> {
    return this.http.get<InnovaEvent>(`${EventService.ENDPOINT}/${id}`);
  }

  public findAllAfterNow(): Observable<InnovaEvent[]> {
    return this.http.get<InnovaEvent[]>(`${EventService.ENDPOINT}/after-now`);
  }
}
