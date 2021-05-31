import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { Client } from '../../../core/models/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;
  public readonly ADVISORYTYPE = LabelConstants.ADVISORYTYPE;
  public readonly ADVISORYAREA = LabelConstants.ADVISORYAREA;
  public readonly ADVISORYSTATE = LabelConstants.ADVISORYSTATE;

  public consultant: string;
  public form: FormGroup;
  public isCreate: boolean;
  public clients: Client[];

  constructor(
    private router: Router,
    private service: FacadeService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.consultant = this.service.getUser();
    this.validateIsCreateForm();
    this.loadClients(this.consultant);
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isCreate = params.id ? false : true;
      const idAdvisory = params.id;
      if (!this.isCreate) {
        this.service.findByIDAdvisory(idAdvisory).subscribe((resp) => {
          const advisory = {
            consultantId: resp.consultantId,
            clientId: resp.clientId,
            date: resp.date,
            type: resp.type,
            durationInHours: resp.durationInHours,
            preparationTypeInHours: resp.preparationTypeInHours,
            area: resp.area,
            subject: resp.subject,
            notes: resp.notes,
            state: resp.state,
          };
          this.form.patchValue(advisory);
        });
      }
    });
  }

  public create(e: Event): void {
    e.preventDefault();
    const advisory = this.form.value;
    if (this.form.valid) {
      this.service.createAdvisory(advisory).subscribe((resp) => {
        if (resp) {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTCREATE +
              SharedConstants.ALERTSUCCESS.ADVISER,
            'success',
          );
        } else {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTCREATE +
              SharedConstants.ALERTERROR.ADVISER,
            'error',
          );
        }
        this.router.navigate(['./asesoria']);
      });
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const advisory = this.form.value;
      this.service.updateAdvisory(advisory).subscribe((resp) => {
        if (resp) {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE +
              SharedConstants.ALERTSUCCESS.ADVISER,
            'success',
          );
        } else {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE +
              SharedConstants.ALERTERROR.ADVISER,
            'error',
          );
        }
        this.router.navigate(['./asesoria']);
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: null,
      consultant: this.consultant,
      client: null,
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      durationInHours: [null, [Validators.required]],
      preparationTypeInHours: [null, [Validators.required]],
      area: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      notes: [null],
      state: [null],
    });
  }

  private loadClients(idConsultant: string): void {
    this.service.findClientByConsultant(idConsultant).subscribe((resp) => {
      this.clients = resp;
    });
  }
}
