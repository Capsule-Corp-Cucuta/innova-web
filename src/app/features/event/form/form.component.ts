import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly EVENT_TYPE = LabelConstants.EVENT_TYPE;
  public readonly EVENT_STATE = LabelConstants.EVENT_STATE;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;

  public endDate: Date;
  public form: FormGroup;
  public isLoading = false;
  public isCreate: boolean;
  public tomorrow = new Date();
  public showComponent = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: FacadeService,
    private router: Router,
  ) {
    this.buildForm();
    const today = new Date();
    this.tomorrow.setDate(today.getDate() + 1);
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
      this.isCreate = !params.id;
      const idEvent = params.id;
      this.validateInput(true);
      this.showComponent = this.isCreate;
      if (!this.isCreate) {
        this.service
          .findByIDEvent(idEvent)
          .pipe(
            finalize(() => {
              this.showComponent = true;
            }),
          )
          .subscribe((resp) => {
            this.form.patchValue(resp);
            this.endDate = resp.closeDate;
          });
      }
    });
  }

  public initializeEndDate(): boolean {
    if (this.form.value['startDate']) {
      this.endDate = new Date(this.form.value['startDate']);
      return true;
    }
    return false;
  }

  public validateEndDate(): void {
    if (this.form.value['startDate'] && this.form.value['closeDate']) {
      const startDateTime: Date = new Date(this.form.value['startDate']);
      const endDate: Date = new Date(this.form.value['closeDate']);
      if (startDateTime.getHours() >= endDate.getHours()) this.form.controls['closeDate'].setValue(null);
    }
  }

  public create(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const event = this.form.value;
      this.isLoading = true;
      const subscription = this.service
        .createEvent(event)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )
        .subscribe(
          () => {
            Swal.fire(
              SharedConstants.ALERTSUCCESS.TITLE,
              SharedConstants.ALERTSUCCESS.TEXTCREATE + SharedConstants.ALERTSUCCESS.EVENT,
              'success',
            );
            this.router.navigate(['./evento']);
          },
          () => {
            Swal.fire(
              SharedConstants.ALERTERROR.TITLE,
              SharedConstants.ALERTERROR.TEXTCREATE + SharedConstants.ALERTERROR.EVENT,
              'error',
            );
          },
        );
      this.subscriptions.push(subscription);
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const event = this.form.value;
      this.isLoading = true;
      const subscription = this.service
        .updateEvent(event)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )
        .subscribe(
          () => {
            Swal.fire(
              SharedConstants.ALERTSUCCESS.TITLE,
              SharedConstants.ALERTSUCCESS.TEXTUPDATE + SharedConstants.ALERTSUCCESS.EVENT,
              'success',
            );
            this.router.navigate(['./evento']);
          },
          () => {
            Swal.fire(
              SharedConstants.ALERTERROR.TITLE,
              SharedConstants.ALERTERROR.TEXTUPDATE + SharedConstants.ALERTERROR.EVENT,
              'error',
            );
          },
        );
      this.subscriptions.push(subscription);
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      closeDate: [null, [Validators.required]],
      registrationDeadlineDate: [null, [Validators.required]],
      eventDurationInHours: [null],
      theme: [null, [Validators.required]],
      type: [null, [Validators.required]],
      state: [null],
      description: [null, [Validators.required]],
      place: [null],
      city: [null],
      department: [null],
      email: [null, [Validators.email]],
      link: [null],
    });
  }

  private validateInput(exito: boolean): void {
    exito
      ? this.form.controls[SharedConstants.DURATION].disable()
      : this.form.controls[SharedConstants.DURATION].enable();
  }
}
