import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Client } from 'src/app/core/models/client.model';
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
  public readonly STEP = SharedConstants.STETP;
  public readonly GENDER = LabelConstants.GENDER;
  public readonly OPTION = LabelConstants.OPTION;
  public readonly COMPANY_TYPE = LabelConstants.COMPANY_TYPE;
  public readonly ETHNIC_GROUP = LabelConstants.ETHNIC_GROUP;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.FORM;
  public readonly CONTACT_TYPES = LabelConstants.CONTACTS_TYPES;
  public readonly CONTACT_MEDIUM = LabelConstants.CONTACT_MEDIUM;
  public readonly EDUCATIONAL_LEVEL = LabelConstants.EUCATIONAL_LEVEL;
  public readonly LEGAL_CONSTITUTION = LabelConstants.LEGAL_CONSTITUTION;
  public readonly INTERNATIONAL_ACTIVITY = LabelConstants.INTERNATIONAL_ACTIVITY;

  public step = 0;
  public form: FormGroup;
  public isWatch: boolean;
  public isLoading = false;

  private client: Client;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private service: FacadeService,
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
      this.isWatch = !params.id;
      const idClient = params.id;
      this.service.findByIDClient(idClient).subscribe((resp) => {
        this.client = resp;
        this.form.patchValue(resp);
        this.validateInput(true);
      });
    });
  }

  public update(e: Event): void {
    e.preventDefault();
    this.validateInput(false);
    if (this.form.valid) {
      const client = this.form.value;
      client.consultantId = this.client.consultantId;
      this.isLoading = true;
      const subscription = this.service.updateClient(client).subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE + SharedConstants.ALERTSUCCESS.CLIENT,
            'success',
          );
          this.router.navigate(['./cliente']);
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE + SharedConstants.ALERTERROR.CLIENT,
            'error',
          );
          this.validateInput(true);
        },
      );
      this.subscriptions.push(subscription);
    }
  }

  public nextStep(): void {
    this.step++;
  }

  public prevStep(): void {
    this.step--;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      registrationDate: [null],
      type: [null],
      name: [null],
      lastname: [null],
      positionInCompany: [null],
      dateOfEntryToCompany: [null],
      birthplace: [null],
      birthdate: [null],
      educationalLevel: [null],
      address: [null],
      contactCity: [null],
      contactDepartment: [null],
      contactPhone: [null, [Validators.maxLength(10)]],
      cellphone: [null, [Validators.maxLength(10)]],
      email: [null, [Validators.email]],
      gender: [null],
      ethnicGroup: [null],
      displaced: [null],
      handicapped: [null],
      companyName: [null],
      nit: [null],
      companyDepartment: [null],
      companyCity: [null],
      companyAddress: [null],
      companyEmail: [null, [Validators.email]],
      companyPhone: [null, [Validators.maxLength(10)]],
      companyCellphone: [null, [Validators.maxLength(10)]],
      companyWebsite: [null],
      companyLegalRepresentative: [null],
      companyLegalConstitution: [null],
      otherLegalConstitution: [null],
      companyConstitutionDate: [null],
      companyNumberOfEmployees: [null],
      companyNumberOfFullTimeEmployees: [null],
      companyNumberOfPartTimeEmployees: [null],
      companyNumberOfDirectEmployees: [null],
      companyNumberOfIndirectEmployees: [null],
      companySector: [null],
      otherCompanySector: [null],
      hasCommercialRegister: [null],
      commercialRegisterNumber: [null],
      lastYearOfRenovation: [null],
      principalCodeCiiu: [null],
      internationalActivity: [null],
      internationalActivityCountries: [null],
      ecommerce: [null],
      servicesProductsOffered: [null],
      discoveryChannel: [null],
      observations: [null],
      state: [null],
      consultant: null,
    });
  }

  private validateInput(exito: boolean) {
    if (exito) {
      this.form.controls[SharedConstants.ID].disable();
      this.form.controls[SharedConstants.DATE].disable();
    } else {
      this.form.controls[SharedConstants.ID].enable();
      this.form.controls[SharedConstants.DATE].enable();
    }
  }
}
