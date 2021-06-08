import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;
  public readonly EVENTTYPE = LabelConstants.EVENTTYPE;
  public readonly EVENTSTATE = LabelConstants.EVENTSTATE;

  public form: FormGroup;
  public isCreate: boolean;

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

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isCreate = params.id ? false : true;
      const idEvent = params.id;
      this.validateInput(true);
      if (!this.isCreate) {
        this.service.findByIDEvent(idEvent).subscribe((resp) => {
          this.form.patchValue(resp);
        });
      }
    });
  }

  public create(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const event = this.form.value;
      this.service.createEvent(event).subscribe(
        () => {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTCREATE +
              SharedConstants.ALERTSUCCESS.EVENT,
            'success',
          );
          this.router.navigate(['./evento']);
        },
        () => {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTCREATE +
              SharedConstants.ALERTERROR.EVENT,
            'error',
          );
        },
      );
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const event = this.form.value;
      this.service.updateEvent(event).subscribe(
        () => {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE +
              SharedConstants.ALERTSUCCESS.EVENT,
            'success',
          );
          this.router.navigate(['./evento']);
        },
        () => {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE +
              SharedConstants.ALERTERROR.EVENT,
            'error',
          );
        },
      );
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
      state: [null, [Validators.required]],
      description: [null],
      place: [null],
      city: [null],
      department: [null],
      email: [null, [Validators.email]],
      link: [null],
    });
  }

  private validateInput(exito: boolean) {
    if (exito) {
      this.form.controls[SharedConstants.DURATION].disable();
    } else {
      this.form.controls[SharedConstants.DURATION].enable();
    }
  }
}
