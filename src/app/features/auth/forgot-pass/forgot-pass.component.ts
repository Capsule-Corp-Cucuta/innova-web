import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})

export class ForgotPassComponent implements OnInit {

  public form:FormGroup;
  public error = false;
  public invalido:string;

  public readonly LABELS = LabelConstants.LABELS.FORGOT_PASSWORD;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LINKS = LabelConstants.LINKS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  public request(): void {
    this.error = false;
    if (this.form.valid) {
    } else {
      this.error = true;
      this.invalido = 'Campo invalido !!!';
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
    });
  }
}

