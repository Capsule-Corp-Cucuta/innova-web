import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.FORM;
  public readonly STEP = SharedConstants.STETP;

  public form: FormGroup;
  public isWatch: boolean;
  public step = 0;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.validateIsCreateForm();
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isWatch = params.id ? false : true;
    });
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  public nextStep(): void {
    this.step++;
  }

  public prevStep(): void {
    this.step--;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      dateRegister: [''],
      clientType: [''],
      name: [''],
      lastName: [''],
      position: [''],
      antiquity: [''],
      placeOfBirth: [''],
      dateOfBirth: [''],
      identificationCard: ['', [Validators.maxLength(10)]],
      educationalLevel: [''],
      addressContact: [''],
      cityContact: [''],
      departmentContact: [''],
      phoneContact: [''],
      mobileContact: ['', [Validators.maxLength(10)]],
      emailContact: ['', [Validators.email]],
      gender: [''],
      ethnicGroup: [''],
      displaced: [''],
      disabled: [''],
      businessName: [''],
      nit: [''],
      legalRepresentative: [''],
      legalConstitution: [''],
      dateConstitution: [''],
      employees: [''],
      tc: [''],
      mt: [''],
      direct: [''],
      indirect: [''],
      addressBusiness: [''],
      city: [''],
      phone: [''],
      mobile: ['', [Validators.maxLength(10)]],
      email: ['', [Validators.email]],
      website: [''],
      typeOfCompany: [''],
      anotherType: [''],
      commercialRegister: [''],
      commercialRegisterNumber: [''],
      yearRenovation: [''],
      mainCodeCiiu: [''],
      internationalActivity: [''],
      countries: [''],
      internetBusiness: [''],
      services: [''],
      means: [''],
      observations: [''],
      state: [''],
    });
  }
}
