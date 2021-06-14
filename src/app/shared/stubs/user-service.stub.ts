import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { TestUtils } from './TestUtils';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceStub {
  public update(user: User): Observable<Response> {
    return of(null);
  }

  public findByID(id: string): Observable<User> {
    return of(TestUtils.user);
  }
}
