import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { ModalComponent } from '../modal/modal.component';
import { Advisory } from '../../../core/models/advisory.model';
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
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.LIST;

  public authority: string;
  public consultant: string;
  public advisory: MatTableDataSource<Advisory>;

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.authority = this.service.getAuthorities()[0];
    this.consultant = this.service.getUser();
    // this.loadData();
    this.loadDataAdmin();
  }

  ngAfterViewInit(): void {
    this.advisory.sort = this.sort;
    this.advisory.paginator = this.paginator;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.advisory.filter = filterValue.trim().toLowerCase();

    if (this.advisory.paginator) {
      this.advisory.paginator.firstPage();
    }
  }

  public openDialog(advisory: string): void {
    if (advisory) {
      this.dialog.open(ModalComponent, {
        data: advisory,
      });
    }
  }

  private loadData(): void {
    if (this.authority === 'ADMIN') {
      this.loadData();
    } else {
      this.loadDataByConsultant(this.consultant);
    }
  }

  private loadDataAdmin(): void {
    this.service.findAllAdvisory().subscribe((resp) => {
      this.advisory = new MatTableDataSource(resp);
    });
  }

  private loadDataByConsultant(consultant: string): void {
    this.service.findAdvisoryByConsultant(consultant).subscribe((resp) => {
      this.advisory = new MatTableDataSource(resp);
    });
  }
}
