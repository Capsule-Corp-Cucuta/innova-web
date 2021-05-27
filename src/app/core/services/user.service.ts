import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.USER}`;

  constructor(private http: HttpClient) {}

  public disable(id: string): Observable<Response> {
    return this.http.put<Response>(`${UserService.ENDPOINT}/${id}/disable`, {});
  }

  public changePassword(
    id: string,
    oldPass: string,
    newPass: string,
  ): Observable<Response> {
    return this.http.post<Response>(
      `${UserService.ENDPOINT}/${id}/change-password?oldPass=${oldPass}&newPass=${newPass}`,
      {},
    );
  }

  public recoverPassword(email: string): Observable<Response> {
    return this.http.put<Response>(
      `${UserService.ENDPOINT}/${email}/recover-password`,
      {},
    );
  }
}
