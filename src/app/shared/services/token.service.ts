import { Injectable } from '@angular/core';

import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly USER_KEY = 'AuthUser';
  private readonly TOKEN_KEY = 'AuthToken';
  private readonly AUTHORITIES_KEY = 'AuthAuthorities';

  private roles: Array<string> = [];

  public setToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public setUser(user: User): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): string {
    return sessionStorage.getItem(this.USER_KEY);
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(this.AUTHORITIES_KEY);
    window.sessionStorage.setItem(
      this.AUTHORITIES_KEY,
      JSON.stringify(authorities),
    );
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(this.AUTHORITIES_KEY)) {
      JSON.parse(
        sessionStorage.getItem(this.AUTHORITIES_KEY),
      ).forEach((authority: any) => this.roles.push(authority.authority));
    }
    return this.roles;
  }
}
