import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LinkConstants } from 'src/app/shared/constants/link-constants';
import { IconConstants } from '../../../shared/constants/icon-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['../../../shared/styles/auth.component.scss'],
})
export class ForgotPassComponent {
  public form: FormGroup;

  public readonly LABELS = LabelConstants.LABELS.FORGOT_PASSWORD;
  public readonly ICONS = IconConstants.ICONS;
  public readonly LINKS = LinkConstants.LINKS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public request(): void {
    if (this.form.valid) {
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
    });
  }
}
