import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Client } from '../../../core/models/client.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
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
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;
  public readonly ADVISORY_TYPE = LabelConstants.ADVISORY_TYPE;
  public readonly ADVISORY_AREA = LabelConstants.ADVISORY_AREA;
  public readonly ADVISORY_STATE = LabelConstants.ADVISORY_STATE;

  public consultant: string;
  public form: FormGroup;
  public isCreate: boolean;
  public clients: Client[];
  public isLoading = false;
  public tomorrow = new Date();

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private service: FacadeService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
    const today = new Date();
    this.tomorrow.setDate(today.getDate() + 1);
  }

  ngOnInit(): void {
    this.consultant = this.service.getUser().id;
    this.validateIsCreateForm();
    this.loadClients(this.consultant);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isCreate = !params.id;
      const idAdvisory = params.id;
      if (!this.isCreate) {
        this.service.findByIDAdvisory(idAdvisory).subscribe((resp) => {
          const advisory = {
            id: resp.id,
            consultantId: resp.consultantId,
            clientId: resp.clientId,
            date: resp.date,
            type: resp.type,
            durationInHours: resp.durationInHours,
            preparationTimeInHours: resp.preparationTimeInHours,
            area: resp.area,
            subject: resp.subject,
            notes: resp.notes,
            state: resp.state,
          };
          this.form.patchValue(advisory);
          this.validateInput(true);
        });
      }
    });
  }

  public create(e: Event): void {
    e.preventDefault();

    const advisory = this.form.value;
    if (this.form.valid) {
      advisory.consultantId = this.consultant;
      this.isLoading = true;
      const subscription = this.service.createAdvisory(advisory).subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTCREATE + SharedConstants.ALERTSUCCESS.ADVISER,
            'success',
          );

          this.router.navigate(['./asesoria']);
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTCREATE + SharedConstants.ALERTERROR.ADVISER,
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
      const advisory = this.form.value;
      this.isLoading = true;
      const subscription = this.service.updateAdvisory(advisory).subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE + SharedConstants.ALERTSUCCESS.ADVISER,
            'success',
          );
          this.router.navigate(['./asesoria']);
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE + SharedConstants.ALERTERROR.ADVISER,
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
      id: [null],
      consultantId: this.consultant,
      clientId: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      type: [null, [Validators.required]],
      area: [null, [Validators.required]],
      state: [null],
      date: [null, [Validators.required]],
      durationInHours: null,
      preparationTimeInHours: null,
      notes: null,
    });
  }

  private loadClients(idConsultant: string): void {
    const subscription = this.service.findClientByConsultant(idConsultant).subscribe((resp) => {
      this.clients = resp;
    });
    this.subscriptions.push(subscription);
  }

  private validateInput(exito: boolean) {
    if (exito) {
      this.form.controls[SharedConstants.CLIENT].disable();
      this.form.controls[SharedConstants.CONSULTANT].disable();
    } else {
      this.form.controls[SharedConstants.CLIENT].enable();
      this.form.controls[SharedConstants.CONSULTANT].enable();
    }
  }
}
