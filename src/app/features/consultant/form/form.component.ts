import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class FormComponent implements OnInit {
  public readonly URIS = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.FORM;

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
    console.log(this.isCreate);
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
      adviser: ['', [Validators.required]],
      client: ['', [Validators.required]],
      date: ['', [Validators.required]],
      type: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      preparation: ['', [Validators.required]],
      area: ['', [Validators.required]],
      affair: ['', [Validators.required]],
      notes: [''],
      state: [''],
    });
  }
}
