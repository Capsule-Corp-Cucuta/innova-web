import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { UserLogin } from 'src/app/core/models/user.model';

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
