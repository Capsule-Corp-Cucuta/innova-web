import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { ModalComponent } from '../modal/modal.component';
import { Advisory } from '../../../core/models/advisory.model';
import { FacadeService } from '../../../shared/services/facade.service';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

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
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public authority: string;
  public consultant: string;
  public advisory: MatTableDataSource<Advisory>;
  public filter = '';

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.consultant = this.service.getUser();
    // this.loadData();
    this.loadDataAdmin();
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.advisory.filter = filterValue.trim().toLowerCase();

    if (this.advisory.paginator) {
      this.advisory.paginator.firstPage();
    }
  }

  public openDialog(advisory: number): void {
    if (advisory) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: advisory,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.loadDataAdmin();
      });
    }
  }

  private loadData(): void {
    if (this.authority === 'ADMIN') {
      this.loadDataAdmin();
    } else if (this.authority === 'CONSULTANT') {
      this.loadDataByConsultant(this.consultant);
    }
  }

  private loadDataAdmin(): void {
    this.service
      .findAllAdvisory()
      .pipe(
        finalize(() => {
          this.advisory.sort = this.sort;
          this.advisory.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.advisory = new MatTableDataSource(resp);
      });
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.advisory.data, this.FILENAME.ADVISER);
    } else {
      this.service.exporterToExcel(
        this.advisory.filteredData,
        this.FILENAME.ADVISER,
      );
    }
  }

  private loadDataByConsultant(consultant: string): void {
    this.service
      .findAdvisoryByConsultant(consultant)
      .pipe(
        finalize(() => {
          this.advisory.sort = this.sort;
          this.advisory.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.advisory = new MatTableDataSource(resp);
      });
  }
}
