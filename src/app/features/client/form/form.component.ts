import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CLIENT.FORM;
  public readonly STEP = SharedConstants.STETP;
  public readonly CONTACTTYPES = LabelConstants.CONTACTS_TYPES;
  public readonly EDUCATIONALLEVEL = LabelConstants.EUCATIONAL_LEVEL;
  public readonly GENDER = LabelConstants.GENDER;
  public readonly ETHNICGROUP = LabelConstants.ETHNICGROUP;
  public readonly LEGALCONSTITUTION = LabelConstants.LEGALCONSTITUTION;
  public readonly COMPANYTYPE = LabelConstants.COMPANYTYPE;
  public readonly INTERNATIONALACTIVITY = LabelConstants.INTERNATIONALACTIVITY;
  public readonly CONTACTMEDIUM = LabelConstants.CONTACTMEDIUM;
  public readonly OPTION = LabelConstants.OPTION;

  public form: FormGroup;
  public isWatch: boolean;
  public step = 0;

  private client: Client;

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

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isWatch = params.id ? false : true;
      const idClient = params.id;
      this.service.findByIDClient(idClient).subscribe((resp) => {
        this.client = resp;
        this.form.patchValue(resp);
      });
    });
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const client = this.form.value;
      client.consultantId = this.client.consultantId;
      this.service.updateClient(client).subscribe(
        () => {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE +
              SharedConstants.ALERTSUCCESS.CLIENT,
            'success',
          );
          this.router.navigate(['./cliente']);
        },
        () => {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE +
              SharedConstants.ALERTERROR.CLIENT,
            'error',
          );
        },
      );
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
      id: [''],
      registrationDate: [''],
      type: [''],
      name: [''],
      lastname: [''],
      position: [''],
      dateOfEntryToCompany: [''],
      birthplace: [''],
      birthdate: [''],
      educationalLevel: [''],
      address: [''],
      contactCity: [''],
      contactDepartment: [''],
      contactPhone: ['', [Validators.maxLength(10)]],
      cellphone: ['', [Validators.maxLength(10)]],
      email: ['', [Validators.email]],
      gender: [''],
      ethnicGroup: [''],
      isDisplaced: [''],
      isHandicapped: [''],
      companyName: [''],
      nit: [''],
      companyDepartment: [''],
      companyCity: [''],
      companyAddress: [''],
      companyEmail: ['', [Validators.email]],
      companyPhone: ['', [Validators.maxLength(10)]],
      companyCellPhone: ['', [Validators.maxLength(10)]],
      companyWebsite: [''],
      legalRepresentative: [''],
      legalConstitution: [''],
      otherLegalConstitution: [''],
      constitutionDate: [''],
      numberOfEmployees: [''],
      numberOfFullTimeEmployees: [''],
      numberOfPartTimeEmployees: [''],
      companyNumberOfDirectEmployees: [''],
      companyNumberOfIndirectEmployees: [''],
      companyType: [''],
      otherCompanySector: [''],
      hasComercialRegister: [''],
      comercialRegisterNumber: [''],
      lastYearOfRenovation: [''],
      mainCodeCiiu: [''],
      internationalActivity: [''],
      internationalActivityCountries: [''],
      isEcommerce: [''],
      servicesProductsOffered: [''],
      contactMedium: [''],
      observations: [''],
      state: [''],
      consultant: null,
    });
  }
}
