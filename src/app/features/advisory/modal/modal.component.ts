import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Advisory } from '../../../core/models/advisory.model';
import { LabelConstants } from '../../../shared/constants/label-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;

  public advisory: Advisory;
  public id: number;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Advisory) {
    this.buildAvisory();
  }

  ngOnInit(): void {
    this.loadAdvisory();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadAdvisory() {
    this.advisory = this.data;
  }

  private buildAvisory(): void {
    this.advisory = {
      id: null,
      consultantId: null,
      clientId: null,
      date: null,
      type: null,
      durationInHours: null,
      preparationTypeInHours: null,
      area: null,
      subject: null,
      notes: null,
      state: null,
    };
  }
}
