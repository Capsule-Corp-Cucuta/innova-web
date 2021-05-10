import { FormBuilder } from '@angular/forms';
import { ComponentFixture } from '@angular/core/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let formBuilder: FormBuilder;
  let injector: TestBed;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [],
      providers: [
        {
          provide: FormBuilder,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    fixture = null;
    formBuilder = null;
    injector = null;
  });

  describe('When loadDataBusiness is invoked', () => {
    it('should isBusiness to be falsy', () => {
      component.loadDataBusiness('Emprendedor');

      expect(component.isBusiness).toBeFalsy();
    });

    it('should isBusiness to be truthy', () => {
      component.loadDataBusiness('Empresa');

      expect(component.isBusiness).toBeTruthy();
    });
  });

  describe('When create is invoked', () => {
    it('should form be invalid', () => {
      component.create();

      expect().nothing();
    });
  });
});
