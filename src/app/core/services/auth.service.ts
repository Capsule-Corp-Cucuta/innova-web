import type { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import type { HttpClient } from '@angular/common/http';

import type { JwtModel } from '../models/jwt.model';
import type { UserLogin } from '../models/user-login.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from '../../shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = environment.APIUrl + UrlConstants.ENDPOINTS.SIGNIN;

  constructor(private http: HttpClient) {}

  public signin(user: UserLogin): Observable<JwtModel> {
    return this.http.post<JwtModel>(this.endPoint, user);
  }

  public signout(): void {
    window.sessionStorage.clear();
  }
}
