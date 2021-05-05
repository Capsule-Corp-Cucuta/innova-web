import { Component, OnInit } from '@angular/core';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  public isBusiness = false;

  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.FORM;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly TYPES = LabelConstants.CONTACTS_TYPES;
  public readonly LINKS = LabelConstants.LINKS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  public loadDataBusiness(type: string): void {
    if (type === 'Empresa') {
      this.isBusiness = true;
    } else {
      this.isBusiness = false;
    }
  }

  public create(): void {
    if (this.form.valid) {
      console.log(this.form.value);
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
