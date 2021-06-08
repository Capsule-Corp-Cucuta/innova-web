import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.INSCRIPTION}`;

  constructor(private http: HttpClient) {}

  public findAttendanceByEvent(id: number): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(
      AttendanceService.ENDPOINT + '/event/' + id,
    );
  }

  public createAttendanceByEvent(
    inscriptions: Inscription[],
  ): Observable<Response> {
    return this.http.put<Response>(AttendanceService.ENDPOINT, inscriptions);
  }

  public eventInscription(
    idUser: string,
    idEvent: number,
  ): Observable<Response> {
    return this.http.post<Response>(AttendanceService.ENDPOINT, {
      userId: idUser,
      eventId: idEvent,
    });
  }
}
