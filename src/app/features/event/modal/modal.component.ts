import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { Event } from 'src/app/core/models/event.model';
import { FacadeService } from '../../../shared/services/facade.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_form.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;

  public event: Event;
  public id: number;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private service: FacadeService,
  ) {}

  ngOnInit(): void {
    this.id = this.data;
    this.loadEvent();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadEvent() {
    this.service.findByIDEvent(this.id).subscribe((resp) => {
      this.event = resp;
    });
  }
}
