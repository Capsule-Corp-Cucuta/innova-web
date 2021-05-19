import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { FacadeService } from '../../../shared/services/facade.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
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
        this.form.patchValue(resp);
      });
    });
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      const client = this.form.value;
      this.service.updateClient(client).subscribe((resp) => {
        if (resp) {
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTUPDATE +
              SharedConstants.ALERTSUCCESS.CLIENT,
            'success',
          );
        } else {
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTUPDATE +
              SharedConstants.ALERTERROR.CLIENT,
            'error',
          );
        }
        this.router.navigate(['./cliente']);
      });
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
      contactType: [''],
      name: [''],
      lastName: [''],
      position: [''],
      antiquity: [''],
      birthplace: [''],
      birthdate: [''],
      educationalLevel: [''],
      address: [''],
      city: [''],
      department: [''],
      phone: [''],
      cellPhone: ['', [Validators.maxLength(10)]],
      gender: [''],
      ethnicGroup: [''],
      isDisplaced: [''],
      isHandicapped: [''],
      companyName: [''],
      nit: [''],
      legalRepresentative: [''],
      legalConstitution: [''],
      otherLegalConstitution: [''],
      constitutionDate: [''],
      numberOfEmployees: [''],
      numberOfFullTimeEmployees: [''],
      numberOfPartTimeEmployees: [''],
      numberOfDirectEmployees: [''],
      numberOfIndirectEmployees: [''],
      email: ['', [Validators.email]],
      website: [''],
      companyType: [''],
      otherCompanyType: [''],
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
