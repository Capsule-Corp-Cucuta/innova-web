import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { IconConstants } from 'src/app/shared/constants/icon-constants';
import { LinkConstants } from 'src/app/shared/constants/link-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class SignupComponent {
  public form: FormGroup;
  public isBusiness = false;

  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.FORM;
  public readonly ICONS = IconConstants.ICONS;
  public readonly TYPES = LabelConstants.CONTACTS_TYPES;
  public readonly LINKS = LinkConstants.LINKS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public loadDataBusiness(type: string): void {
    if (type === 'Empresa') {
      this.isBusiness = true;
    } else {
      this.isBusiness = false;
    }
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
