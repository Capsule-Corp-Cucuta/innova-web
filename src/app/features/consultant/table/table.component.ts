import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { Consultant } from '../../../core/models/consultant.model';
import { FacadeService } from '../../../shared/services/facade.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.LIST;

  public option: string;
  public consultant: MatTableDataSource<Consultant>;

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.consultant.sort = this.sort;
    this.consultant.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.consultant.filter = filterValue.trim().toLowerCase();

    if (this.consultant.paginator) {
      this.consultant.paginator.firstPage();
    }
  }

  public activateAndDeactivate(IdAsesor: string, state: boolean): void {
    this.option =
      state === false ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE;
    Swal.fire({
      title: SharedConstants.ALERTACTIVATE.TITLE,
      text:
        SharedConstants.ALERTACTIVATE.TEXT +
        this.option +
        SharedConstants.ALERTACTIVATE.TEXTADVISER,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: SharedConstants.ALERTACTIVATE.TOACCEPT,
      cancelButtonText: SharedConstants.ALERTACTIVATE.CANCEL,
    }).then((result) => {
      if (result.value) {
        //TODO
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  private loadData(): void {
    this.service.findAllConsultant().subscribe((resp) => {
      this.consultant = new MatTableDataSource(resp);
    });
  }
}
