import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtModel } from '../models/jwt.model';
import { UserLogin } from '../models/user-login.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from '../../shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.SIGNIN}`;

  constructor(private http: HttpClient) {}

  public signin(user: UserLogin): Observable<JwtModel> {
    return this.http.post<JwtModel>(AuthService.ENDPOINT, user);
  }

  public signout(): void {
    window.sessionStorage.clear();
  }
}
