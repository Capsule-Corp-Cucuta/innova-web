import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalComponent } from '../modal/modal.component';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACT_REGISTER.FORM;

  public form: FormGroup;
  public idUser: string;
  public check: boolean;
  public isLoading = false;
  public authority: string;
  public showComponent = false;
  public isAccompaniment = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: FacadeService,
    public dialog: MatDialog,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.validateIsCreateForm();
    this.validateAccompaniment(this.authority);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.idUser = params.id;
      this.service
        .findByIdUser(this.idUser)
        .pipe(
          finalize(() => {
            this.showComponent = true;
          }),
        )
        .subscribe((resp) => {
          this.form.patchValue(resp);
          this.validateInput(true);
        });
    });
  }

  public validateAccompaniment(authority: string): void {
    if (authority === SharedConstants.ROLES.CONTACT) {
      const subscription = this.service.findByIDContact(this.idUser).subscribe((resp) => {
        this.isAccompaniment = !resp.requestAccompaniment === true;
      });
      this.subscriptions.push(subscription);
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    this.validateInput(false);
    this.check = this.form.value[SharedConstants.CHECK];
    if (this.form.valid) {
      const user = this.form.value;
      this.isLoading = true;
      const subscription = this.service
        .updateUser(user)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )
        .subscribe(
          () => {
            Swal.fire(
              SharedConstants.ALERTSUCCESS.TITLE,
              SharedConstants.ALERTSUCCESS.TEXTUPDATE + SharedConstants.ALERTSUCCESS.USER,
              'success',
            );
            if (this.check) {
              this.service.requestAccompaniment(this.idUser).subscribe(() => {
                this.validateAccompaniment(this.authority);
              });
            }
            this.validateInput(true);
          },
          () => {
            Swal.fire(
              SharedConstants.ALERTERROR.TITLE,
              SharedConstants.ALERTERROR.TEXTUPDATE + SharedConstants.ALERTERROR.USER,
              'error',
            );
            this.validateInput(true);
          },
        );
      this.subscriptions.push(subscription);
    }
  }

  public openDialog(e: Event): void {
    e.preventDefault();
    this.dialog.open(ModalComponent, {
      data: this.idUser,
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      id: [null, [Validators.required, Validators.maxLength(10)]],
      cellphone: [null, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      email: [null, [Validators.required, Validators.email]],
      address: [null],
      check: false,
    });
  }

  private validateInput(exito: boolean) {
    if (exito) {
      this.form.controls[SharedConstants.ID].disable();
    } else {
      this.form.controls[SharedConstants.ID].enable();
    }
  }
}
