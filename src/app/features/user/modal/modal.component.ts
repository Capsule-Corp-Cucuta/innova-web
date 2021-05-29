import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.CHANGEPASSWORD;

  public form: FormGroup;
  public id: string;
  public error = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder,
    private service: FacadeService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data;
  }

  public changePassword(): void {
    if (this.validatePassword()) {
      this.error = false;
      this.service
        .changePassword(
          this.id,
          this.getFormValue('oldPassword'),
          this.getFormValue('newPassword'),
        )
        .subscribe(
          (resp) => {
            Swal.fire(
              SharedConstants.ALERTSUCCESS.TITLE,
              SharedConstants.ALERTSUCCESS.TEXTCHANGE,
              'success',
            );
            this.service.signout();
          },
          (err) => {
            Swal.fire(
              SharedConstants.ALERTERROR.TITLE,
              SharedConstants.ALERTERROR.TEXTCHANGE,
              'error',
            );
          },
        );
    } else {
      this.error = true;
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      oldPassword: [undefined, [Validators.required]],
      newPassword: [undefined, [Validators.required]],
      repeatPassword: [undefined, [Validators.required]],
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
