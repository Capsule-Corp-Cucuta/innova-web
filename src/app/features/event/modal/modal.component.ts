import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;

  public form: FormGroup;
  public id: number;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data;
    this.loadConsultant();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadConsultant() {
    //TODO
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: [''],
      dateStart: [''],
      dateEnd: [''],
      deadLine: [''],
      hour: [''],
      duration: [''],
      theme: [''],
      eventType: [''],
      state: [''],
      description: [''],
      place: [''],
      city: [''],
      department: [''],
      email: [''],
      website: [''],
    });
  }
}
