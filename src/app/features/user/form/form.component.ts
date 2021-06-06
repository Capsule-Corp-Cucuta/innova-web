import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.FORM;

  public form: FormGroup;
  public idUser: string;
  public check: boolean;
  public authority: string;
  public isAccompaniment = false;

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

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.idUser = params.id;
      this.service.findByIdUser(this.idUser).subscribe((resp) => {
        this.form.patchValue(resp);
        this.validateInput(true);
      });
    });
  }

  public validateAccompaniment(authority: string): void {
    if (authority === SharedConstants.ROLES.CONTACT) {
      this.service.findByIDContact(this.idUser).subscribe((resp) => {
        this.isAccompaniment = resp.requestAccompaniment == true ? false : true;
      });
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    this.validateInput(false);
    this.check = this.form.value[SharedConstants.CHECK];
    if (this.form.valid) {
      const user = this.form.value;
      this.service.updateUser(user).subscribe(
        () => {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE +
              SharedConstants.ALERTSUCCESS.USER,
            'success',
          );
          if (this.check) {
            this.service.updateAccompaniment(this.idUser);
          }
        },
        () => {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE +
              SharedConstants.ALERTERROR.USER,
            'error',
          );
          this.validateInput(true);
        },
      );
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
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.maxLength(10)]],
      cellphone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
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
