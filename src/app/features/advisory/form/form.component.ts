import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;

  public form: FormGroup;
  public isCreate: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.validateIsCreateForm();
  }

  public validateIsCreateForm(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.isCreate = params.id ? false : true;
    });
  }

  public create(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  public update(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      identificationCard: ['', [Validators.required, Validators.maxLength(10)]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      state: [''],
    });
  }
}
