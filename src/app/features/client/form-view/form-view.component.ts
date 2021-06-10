import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Consultant } from 'src/app/core/models/consultant.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormViewComponent implements OnInit, OnDestroy {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.FORM;

  public consultant: Consultant;
  public client: string;
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
    const subscription = this.service
      .findByIDClient(this.client)
      .subscribe((resp) => {
        this.service
          .findByIDConsultant(resp.consultantId)
          .subscribe((response) => {
            this.consultant = response;
          });
      });

    this.subscriptions.push(subscription);
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
