import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactType } from 'src/app/core/models/contact.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class SignupComponent implements OnDestroy {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly TYPES = LabelConstants.CONTACTS_TYPES;
  public readonly LABELS = LabelConstants.LABELS.CONTACT_REGISTER.FORM;

  public state: boolean;
  public form: FormGroup;
  public isLoading = false;
  public isBusiness = false;
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private service: FacadeService, private router: Router) {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public loadDataBusiness(type: ContactType): void {
    this.isBusiness = type === ContactType.EMPRESA ? true : false;
  }

  public create(): void {
    const contact = this.form.value;
    this.state = contact.state === true;

    contact.state = this.state;

    this.isLoading = true;
    const subscription = this.service.createContact(contact).subscribe(
      () => {
        this.isLoading = false;
        Swal.fire(
          SharedConstants.ALERTSUCCESS.TITLE,
          SharedConstants.ALERTSUCCESS.TEXTCREATE + SharedConstants.ALERTSUCCESS.CONTACT,
          'success',
        );
        this.router.navigate(['./seguridad']);
      },
      () => {
        this.isLoading = false;
        Swal.fire(
          SharedConstants.ALERTERROR.TITLE,
          SharedConstants.ALERTERROR.TEXTCREATE + SharedConstants.ALERTERROR.CONTACT,
          'error',
        );
      },
    );
    this.subscriptions.push(subscription);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.maxLength(10)]],
      cellphone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]],
      requestAccompaniment: [],
      companyName: [''],
      nit: [''],
      companyAddress: [''],
      companyCity: [''],
      companyDepartment: ['', [Validators.maxLength(10)]],
      companyPhone: ['', [Validators.maxLength(10)]],
      companyCellPhone: ['', [Validators.maxLength(10)]],
      companyEmail: ['', [Validators.email]],
      companyWebsite: [''],
      registrationDate: [new Date()],
    });
  }
}
