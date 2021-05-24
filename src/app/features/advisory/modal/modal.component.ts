import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { Advisory } from '../../../core/models/advisory.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.FORM;

  public advisory: Advisory;
  public id: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,

    private service: FacadeService,
  ) {}

  ngOnInit(): void {
    this.id = this.data;
    this.loadConsultant();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadConsultant() {
    this.service.findByIDAdvisory(this.id).subscribe((resp) => {
      this.advisory = resp;
    });
  }
}
