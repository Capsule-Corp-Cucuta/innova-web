import { of, throwError } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture } from '@angular/core/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SigninComponent } from './signin.component';
import { TestUtils } from 'src/app/shared/stubs/TestUtils';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { FacadeServiceStub } from 'src/app/shared/stubs/facade-service.stub';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let formBuilder: FormBuilder;
  let service: FacadeService;
  let injector: TestBed;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [],
      providers: [
        {
          provide: FormBuilder,
        },
        {
          provide: FacadeService,
          useClass: FacadeServiceStub,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.inject(FacadeService);
    formBuilder = injector.inject(FormBuilder);
    fixture.detectChanges();
  });

  afterAll(() => {
    component = null;
    fixture = null;
    formBuilder = null;
    service = null;
    injector = null;
  });

  describe('When ngOnInit is invoked', () => {
    it('should validate if have token sesion', () => {
      const spy = spyOn(service, 'getToken');

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When onLogin is invoked', () => {
    it('should request to signin', () => {
      component.form.controls[SharedConstants.EMAIL].setValue(
        'test@mail.com.co',
      );
      component.form.controls[SharedConstants.PASSWORD].setValue('miClave_123');
      const spy = spyOn(service, 'signin').and.returnValue(of(TestUtils.JWT));

      component.onLogin();

      expect(spy).toHaveBeenCalled();
      expect(component.isLogged).toBeTruthy();
      expect(component.isLoginFail).toBeFalsy();
    });

    it('should mark isLoginFail as true', () => {
      component.form.controls[SharedConstants.EMAIL].setValue(
        'test@mail.com.co',
      );
      component.form.controls[SharedConstants.PASSWORD].setValue('miClave_123');
      spyOn(service, 'signin').and.returnValue(throwError({}));

      component.onLogin();

      expect(component.isLogged).toBeFalsy();
      expect(component.isLoginFail).toBeTruthy();
    });
  });
});
