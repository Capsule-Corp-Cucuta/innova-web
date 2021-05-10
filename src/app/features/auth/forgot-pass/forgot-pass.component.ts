import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class ForgotPassComponent {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.FORGOT_PASSWORD;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public request(): void {
    // TODO
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
