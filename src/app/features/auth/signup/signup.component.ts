import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class SignupComponent {
  public form: FormGroup;
  public isBusiness = false;

  public readonly URIS = UrlConstants.ROUTES;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly TYPES = LabelConstants.CONTACTS_TYPES;
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.FORM;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public loadDataBusiness(type: string): void {
    this.isBusiness = type === SharedConstants.BUSINESS ? true : false;
  }

  public create(): void {
    if (this.form.valid) {
      // TODO
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      identificationCard: ['', [Validators.required, Validators.maxLength(10)]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      contactType: ['', [Validators.required]],
      applyFor: [false],
      businessName: [''],
      nit: [''],
      address: [''],
      city: [''],
      businessPhone: ['', [Validators.maxLength(10)]],
      businessMobile: ['', [Validators.maxLength(10)]],
      businessEmail: ['', [Validators.email]],
      website: [''],
    });
  }
}
