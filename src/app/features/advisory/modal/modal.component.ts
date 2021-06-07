import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LabelConstants } from '../../../shared/constants/label-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { Advisory } from '../../../core/models/advisory.model';

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

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private service: FacadeService,
  ) {
    this.buildAvisory();
  }

  ngOnInit(): void {
    this.id = this.data;
    this.loadAdvisory();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadAdvisory() {
    this.service.findByIDAdvisory(this.id).subscribe((resp) => {
      this.advisory = resp;
    });
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
