import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { UserLogin } from '../models/user.model';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = injector.inject(AuthService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    injector = null;
    service = null;
    httpMock = null;
  });

  describe('When signin is invoked', () => {
    it('should request authorization', () => {
      const user: UserLogin = {
        email: 'test@mail.com',
        password: 'myPass1234',
      };

      service.signin(user).subscribe();
      const req = httpMock.expectOne(AuthService.ENDPOINT);

      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('When signout in invoked', () => {
    it('should clear the sesion storage', () => {
      const spy = spyOn(window.sessionStorage, 'clear');

      service.signout();

      expect(spy).toHaveBeenCalled();
    });
  });
});
