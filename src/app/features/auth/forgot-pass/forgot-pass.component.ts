import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class ForgotPassComponent implements OnDestroy {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.FORGOT_PASSWORD;

  public form: FormGroup;
  public isLoading = false;
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private service: FacadeService, private router: Router) {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public request(e: Event): void {
    e.preventDefault();
    this.isLoading = true;
    const subscription = this.service.recoverPassword(this.form.value['email']).subscribe(
      () => {
        this.isLoading = false;
        Swal.fire(SharedConstants.ALERTSUCCESS.TITLE, SharedConstants.ALERTSUCCESS.TEXTEMAIL, 'success');
        this.router.navigate(['./seguridad']);
      },
      () => {
        this.isLoading = false;
        Swal.fire(SharedConstants.ALERTERROR.TITLE, SharedConstants.ALERTERROR.TEXTEMAIL, 'error');
      },
    );
    this.subscriptions.push(subscription);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
