import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Consultant } from 'src/app/core/models/consultant.model';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACT_REGISTER.ASSIGN_ADVISOR;

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
      .pipe(
        finalize(() => {
          this.onNoClick();
        }),
      )
      .subscribe(
        () => {
          this.isLoading = false;
          Swal.fire(SharedConstants.ALERTSUCCESS.TITLE, SharedConstants.ALERTSUCCESS.TEXTASSIGN, 'success');
        },
        () => {
          this.isLoading = false;
          Swal.fire(SharedConstants.ALERTERROR.TITLE, SharedConstants.ALERTERROR.TEXTASSIGN, 'error');
        },
      );
    this.subscriptions.push(subscription);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadConsultants() {
    const subscription = this.service.findAllConsultantActive().subscribe((resp) => {
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
