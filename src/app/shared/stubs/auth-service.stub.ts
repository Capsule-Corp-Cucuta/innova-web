import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { UserLogin } from 'src/app/core/models/user-login.model';
import { TestUtils } from './TestUtils';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceStub {
  public signin(user: UserLogin): Observable<JwtModel> {
    return of(TestUtils.JWT);
  }

  public signout(): void {
    window.sessionStorage.clear();
  }
}
