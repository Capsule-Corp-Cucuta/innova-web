import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Consultant } from 'src/app/core/models/consultant.model';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['../../../shared/styles/_form2.component.scss'],
})
export class FormViewComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.FORM;

  public consultant: Consultant;
  public client: string;

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.client = this.service.getUser().id;
    this.validateIsCreateForm();
  }

  public validateIsCreateForm(): void {
    this.service.findByIDClient(this.client).subscribe((resp) => {
      this.service
        .findByIDConsultant(resp.consultantId)
        .subscribe((response) => {
          this.consultant = response;
        });
    });
  }
}
