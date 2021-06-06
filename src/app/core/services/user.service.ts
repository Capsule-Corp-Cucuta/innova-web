import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.USER}`;

  constructor(private http: HttpClient) {}

  public disable(id: string): Observable<Response> {
    return this.http.put<Response>(
      `${UserService.ENDPOINT}/change-state/${id}`,
      null,
    );
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

  public update(user: User): Observable<Response> {
    return this.http.put<Response>(`${UserService.ENDPOINT}/${user.id}`, user);
  }

  public findByID(id: string): Observable<User> {
    return this.http.get<User>(`${UserService.ENDPOINT}/${id}`);
  }

  public findByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${UserService.ENDPOINT}/email/${email}`);
  }
}
