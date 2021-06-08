import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.EVENT}`;

  constructor(private http: HttpClient) {}

  public create(event: Event): Observable<Response> {
    return this.http.post<Response>(EventService.ENDPOINT, event);
  }

  public update(event: Event): Observable<Response> {
    return this.http.put<Response>(
      EventService.ENDPOINT + '/' + event.id,
      event,
    );
  }

  public findByID(id: number): Observable<Event> {
    return this.http.get<Event>(EventService.ENDPOINT + '/' + id);
  }

  public findByClient(id: string): Observable<Event[]> {
    return this.http.get<Event[]>(EventService.ENDPOINT + '/client/' + id);
  }

  public findAll(): Observable<Event[]> {
    return this.http.get<Event[]>(EventService.ENDPOINT);
  }
}
