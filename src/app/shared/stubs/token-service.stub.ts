import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceStub {
  public setToken(token: string): void {
    // Do something
  }

  public getToken(): string {
    return TestUtils.JWT.jwt;
  }

  public setUser(id: string): void {
    // Do something
  }

  public getUser(): string {
    return 'Test';
  }

  public setAuthorities(authorities: string[]): void {
    // Do something
  }

  public getAuthorities(): string[] {
    return TestUtils.JWT.authorities;
  }
}
