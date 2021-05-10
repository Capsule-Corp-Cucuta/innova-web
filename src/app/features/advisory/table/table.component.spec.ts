import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let injector: TestBed;
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    fixture.detectChanges();
  });

  afterAll(() => {
    component = null;
    fixture = null;
    injector = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
