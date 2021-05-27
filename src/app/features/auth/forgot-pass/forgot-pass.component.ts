import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

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

  constructor(
    private formBuilder: FormBuilder,
    private service: FacadeService,
  ) {
    this.buildForm();
  }

  public request(e: Event): void {
    e.preventDefault();
    this.service.recoverPassword(this.form.value['email']).subscribe(
      (resp) => {
        Swal.fire(
          SharedConstants.ALERTSUCCESS.TITLE,
          SharedConstants.ALERTSUCCESS.TEXTEMAIL,
          'success',
        );
      },
      (err) => {
        Swal.fire(
          SharedConstants.ALERTERROR.TITLE,
          SharedConstants.ALERTERROR.TEXTEMAIL,
          'error',
        );
      },
    );
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
