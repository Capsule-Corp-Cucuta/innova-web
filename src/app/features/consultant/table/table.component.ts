import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

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
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.CONSULTANT.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public option: string;
  public consultant: MatTableDataSource<Consultant>;
  public filter = '';

  constructor(private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.consultant.filter = filterValue.trim().toLowerCase();

    if (this.consultant.paginator) {
      this.consultant.paginator.firstPage();
    }
  }

  public activateAndDeactivate(id: string, state: boolean): void {
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
        this.service.enableAndDisableUser(id).subscribe(
          (resp) => {
            Swal.fire(SharedConstants.ALERTSUCCESS.TITLE, 'success');
          },
          (err) => {
            Swal.fire(SharedConstants.ALERTERROR.TITLE, 'error');
          },
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.consultant.data, this.FILENAME.CONSULTANT);
    } else {
      this.service.exporterToExcel(
        this.consultant.filteredData,
        this.FILENAME.CONSULTANT,
      );
    }
  }

  private loadData(): void {
    this.service
      .findAllConsultant()
      .pipe(
        finalize(() => {
          this.consultant.sort = this.sort;
          this.consultant.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.consultant = new MatTableDataSource(resp);
      });
  }
}
