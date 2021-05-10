import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/form.component.scss']
})
export class FormComponent implements OnInit {
  public form:FormGroup;
  public isCreate: boolean;

  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder,private activeRoute: ActivatedRoute) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.validateIsCreateForm();
  }

  public validateIsCreateForm() {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params.id;
      if (id) {
        this.isCreate = false;
      } else {
        this.isCreate = true;
      }
    });
  }

  public create(e: Event) {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  public update(e: Event) {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      identificationCard: ['', [Validators.required,Validators.maxLength(10)]],
      mobile: ['', [Validators.required,Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      address: ['', [Validators.required]],
      state: [''],
    });
  }

}
