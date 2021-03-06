import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CONTACT_REGISTER.CHANGE_PASSWORD;

  public form: FormGroup;
  public id: string;
  public error = false;
  public isLoading = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder,
    private service: FacadeService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public changePassword(): void {
    if (this.validatePassword()) {
      this.error = false;
      this.isLoading = true;
      const subscription = this.service
        .changePassword(this.id, this.getFormValue('oldPassword'), this.getFormValue('newPassword'))
        .subscribe(
          () => {
            this.isLoading = false;
            Swal.fire(SharedConstants.ALERTSUCCESS.TITLE, SharedConstants.ALERTSUCCESS.TEXTCHANGE, 'success');
            this.service.signout();
            this.onNoClick();
            this.router.navigate([this.ROUTES.SECURITY]);
          },
          () => {
            this.isLoading = false;
            Swal.fire(SharedConstants.ALERTERROR.TITLE, SharedConstants.ALERTERROR.TEXTCHANGE, 'error');
          },
        );
      this.subscriptions.push(subscription);
    } else {
      this.error = true;
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      oldPassword: [undefined, [Validators.required, Validators.minLength(8)]],
      newPassword: [undefined, [Validators.required, Validators.minLength(8)]],
      repeatPassword: [undefined, [Validators.required, Validators.minLength(8)]],
    });
  }

  private validatePassword(): boolean {
    if (
      this.getFormValue('newPassword') &&
      this.getFormValue('repeatPassword') &&
      this.getFormValue('newPassword') === this.getFormValue('repeatPassword')
    ) {
      return true;
    }
    return false;
  }

  private getFormValue(control: string): string {
    if (this.form.controls[control].value) {
      return this.form.controls[control].value;
    } else {
      return undefined;
    }
  }
}
