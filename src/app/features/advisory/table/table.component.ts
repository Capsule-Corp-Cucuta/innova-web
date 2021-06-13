import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { Advisory, AdvisoryState } from '../../../core/models/advisory.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/_table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly ROLES = SharedConstants.ROLES;
  public readonly FILENAME = SharedConstants.FILENAMES;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.LIST;

  public authority: string;
  public user: string;
  public advisory: MatTableDataSource<Advisory>;
  public filter = '';
  public isLoading = false;

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.user = this.service.getUser().id;
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.advisory.filter = filterValue.trim().toLowerCase();

    if (this.advisory.paginator) {
      this.advisory.paginator.firstPage();
    }
  }

  public openDialog(advisory: Advisory): void {
    if (advisory) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: advisory,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.loadDataAdmin();
      });
    }
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.advisory.data, this.FILENAME.ADVISER);
    } else {
      this.service.exporterToExcel(this.advisory.filteredData, this.FILENAME.ADVISER);
    }
  }

  public showEdit(advisory: Advisory): boolean {
    return this.authority === this.ROLES.CONSULTANT && advisory.state !== AdvisoryState.COMPLETE;
  }

  private loadData(): void {
    if (this.authority == this.ROLES.ADMIN) {
      this.loadDataAdmin();
    } else if (this.authority == this.ROLES.CONSULTANT) {
      this.loadDataByConsultant(this.user);
    } else if (this.authority == this.ROLES.CLIENT) {
      this.loadDataByClient(this.user);
    }
  }

  private loadDataAdmin(): void {
    this.isLoading = true;
    const subscription = this.service
      .findAllAdvisory()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.advisory.sort = this.sort;
          this.advisory.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.advisory = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private loadDataByConsultant(consultant: string): void {
    this.isLoading = true;
    const subscription = this.service
      .findAdvisoryByConsultant(consultant)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.advisory.sort = this.sort;
          this.advisory.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.advisory = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private loadDataByClient(client: string): void {
    const subscription = this.service
      .findAdvisoryByClient(client)
      .pipe(
        finalize(() => {
          this.advisory.sort = this.sort;
          this.advisory.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.advisory = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }
}
