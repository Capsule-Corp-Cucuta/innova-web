import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('FormComponent', () => {
  let injector: TestBed;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let formBuilder: FormBuilder;
  let activeRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
    activeRoute = injector.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  afterAll(() => {
    component = null;
    fixture = null;
    injector = null;
    formBuilder = null;
    activeRoute = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
