import Swal from 'sweetalert2';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Inscription } from 'src/app/core/models/inscription.model';
import { InnovaEvent } from 'src/app/core/models/innova-event.model';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROLES = SharedConstants.ROLES;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;

  public event: InnovaEvent;
  public idUser: string;
  public authority: string;
  public showButton: boolean;
  public inscription: Inscription;
  public isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: FacadeService,
  ) {
    this.buildEvent();
  }

  ngOnInit(): void {
    this.event = this.data.event;
    this.authority = this.service.getAuthorities()[0];
    this.idUser = this.service.getUser().id;
    this.showButton =
      this.data.showButton && (this.authority === this.ROLES.CLIENT || this.authority === this.ROLES.CONTACT);
    this.loadEvent();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public inscriptionEvent(): void {
    this.isLoading = true;
    this.service.inscriptToEvent(this.idUser, this.event.id).subscribe(
      () => {
        this.isLoading = false;
        Swal.fire(
          SharedConstants.ALERTSUCCESS.TITLE,
          SharedConstants.ALERTSUCCESS.TEXTCREATE + SharedConstants.ALERTSUCCESS.EVENT_INSCRIPTION,
          'success',
        );
      },
      () => {
        this.isLoading = false;
        Swal.fire(
          SharedConstants.ALERTERROR.TITLE,
          SharedConstants.ALERTERROR.TEXTCREATE + SharedConstants.ALERTERROR.EVENT_INSCRIPTION,
          'error',
        );
      },
    );
  }

  private loadEvent() {
    this.event = this.data.event;
  }

  private buildEvent() {
    this.event = {
      id: null,
      title: null,
      theme: null,
      description: null,
      type: null,
      state: null,
      startDate: null,
      closeDate: null,
      registrationDeadlineDate: null,
      eventDurationInHours: null,
      department: null,
      city: null,
      place: null,
      email: null,
      link: null,
    };
  }
}
