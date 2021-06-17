import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Consultant } from 'src/app/core/models/consultant.model';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormViewComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.FORM;

  public client: string;
  public showComponent = false;
  public consultant: Consultant;
  private subscriptions: Subscription[] = [];

  constructor(private service: FacadeService) {
    this.buildAssigned();
  }

  ngOnInit(): void {
    this.client = this.service.getUser().id;
    this.validateIsCreateForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public validateIsCreateForm(): void {
    const findByIDClient = this.service.findByIDClient(this.client).subscribe((resp) => {
      const findByIDConsultant = this.service
        .findByIDConsultant(resp.consultantId)
        .pipe(
          finalize(() => {
            this.showComponent = true;
          }),
        )
        .subscribe((response) => {
          this.consultant = response;
        });
      this.subscriptions.push(findByIDConsultant);
    });
    this.subscriptions.push(findByIDClient);
  }

  private buildAssigned(): void {
    this.consultant = {
      id: null,
      lastname: null,
      name: null,
      code: null,
      cellphone: null,
      email: null,
      address: null,
    };
  }
}
