import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { TokenService } from './token.service';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserLogin } from 'src/app/core/models/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private _authService: AuthService; // tslint:disable-line
  private _tokenService: TokenService; // tslint:disable-line

  constructor(private injector: Injector) {}

  public get authService(): AuthService {
    if (!this._authService) {
      this._authService = this.injector.get<AuthService>(AuthService);
    }
    return this._authService;
  }

  public get tokenService(): TokenService {
    if (!this._tokenService) {
      this._tokenService = this.injector.get<TokenService>(TokenService);
    }
    return this._tokenService;
  }

  public signin(user: UserLogin): Observable<JwtModel> {
    return this.authService.signin(user);
  }

  public signout(): void {
    return this.authService.signout();
  }

  public setToken(token: string): void {
    this.tokenService.setToken(token);
  }

  public getToken(): string {
    return this.tokenService.getToken();
  }

  public setUser(id: string): void {
    this.tokenService.setUser(id);
  }

  public getUser(): string {
    return this.tokenService.getUser();
  }

  public setAuthorities(authorities: string[]): void {
    this.tokenService.setAuthorities(authorities);
  }

  public getAuthorities(): string[] {
    return this.tokenService.getAuthorities();
  }
}
