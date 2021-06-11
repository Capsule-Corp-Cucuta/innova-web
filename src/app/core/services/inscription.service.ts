import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.INSCRIPTION}`;

  constructor(private http: HttpClient) {}

  public inscriptToEvent(
    idUser: string,
    idEvent: number,
  ): Observable<Response> {
    return this.http.post<Response>(InscriptionService.ENDPOINT, {
      userId: idUser,
      eventId: idEvent,
    });
  }

  public takeAttendance(inscriptions: Inscription[]): Observable<Response> {
    return this.http.put<Response>(InscriptionService.ENDPOINT, inscriptions);
  }

  public findInscriptionsByEvent(id: number): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(
      InscriptionService.ENDPOINT + '/event/' + id,
    );
  }
}
