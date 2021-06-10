import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { Consultant } from 'src/app/core/models/consultant.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.ASSIGNADVISOR;

  public form: FormGroup;
  public id: string;
  public idConsultant: string;
  public consultants: Consultant[];
  public isLoading = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder,
    private service: FacadeService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data;
    this.loadConsultants();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public assign(e: Event): void {
    e.preventDefault();
    this.idConsultant = this.form.value['consultant'];
    this.isLoading = true;
    const subscription = this.service
      .assignConsultant(this.id, this.idConsultant)
      .subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTSUCCESS.TITLE,
            SharedConstants.ALERTSUCCESS.TEXTASSIGN,
            'success',
          );
        },
        () => {
          this.isLoading = false;
          Swal.fire(
            SharedConstants.ALERTERROR.TITLE,
            SharedConstants.ALERTERROR.TEXTASSIGN,
            'error',
          );
        },
      );
    this.subscriptions.push(subscription);
    this.onNoClick();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadConsultants() {
    const subscription = this.service
      .findAllConsultantActive()
      .subscribe((resp) => {
        this.consultants = resp;
      });
    this.subscriptions.push(subscription);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      consultant: ['', [Validators.required]],
    });
  }
}
