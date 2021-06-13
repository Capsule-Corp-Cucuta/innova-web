import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.FORM;

  public form: FormGroup;
  public isCreate: boolean;
  public isLoading = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: FacadeService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.validateIsCreateForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isCreate = params.id ? false : true;
      const idConsultant = params.id;
      if (!this.isCreate) {
        this.service.findByIDConsultant(idConsultant).subscribe((resp) => {
          this.form.patchValue(resp);
          this.validateInput(true);
        });
      }
    });
  }

  public create(e: Event): void {
    e.preventDefault();
    const consultant = this.form.value;
    if (this.form.valid) {
      this.isLoading = true;
      const subscription = this.service.createConsultant(consultant).subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTCREATE + SharedConstants.ALERTSUCCESS.CONSULTANT,
            'success',
          );
          this.router.navigate(['./asesor']);
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTCREATE + SharedConstants.ALERTERROR.CONSULTANT,
            'error',
          );
        },
      );
      this.subscriptions.push(subscription);
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    this.validateInput(false);
    if (this.form.valid) {
      const consultant = this.form.value;
      this.isLoading = true;
      const subscription = this.service.updateConsultant(consultant).subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE + SharedConstants.ALERTSUCCESS.CONSULTANT,
            'success',
          );
          this.router.navigate(['./asesor']);
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE + SharedConstants.ALERTERROR.CONSULTANT,
            'error',
          );
          this.validateInput(true);
        },
      );
      this.subscriptions.push(subscription);
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(10)]],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      active: true,
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
