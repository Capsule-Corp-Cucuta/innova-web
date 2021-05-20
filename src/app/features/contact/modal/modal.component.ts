import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONTACTREGISTER.ASSIGNADVISOR;

  public form: FormGroup;
  public id: number;
  public advisers: [] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data;
    this.loadAdvisers();
  }

  public assign(e: Event): void {
    e.preventDefault();
    if (this.form.valid) {
      //TODO
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private loadAdvisers() {
    //TODO
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      client: [this.id],
      adviser: ['', [Validators.required]],
    });
  }
}
