import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { Contact } from '../../../core/models/contact.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { ContactExcel } from 'src/app/core/models/contact-excel.model';

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
  public readonly LABELS = LabelConstants.LABELS.CONTACT_REGISTER.LIST;
  public readonly FILENAME = SharedConstants.FILENAMES;

  public contact: MatTableDataSource<Contact>;
  public filter = '';
  public isLoading = false;

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private service: FacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public applyFilter(): void {
    const filterValue = this.filter;
    this.contact.filter = filterValue.trim().toLowerCase();

    if (this.contact.paginator) {
      this.contact.paginator.firstPage();
    }
  }

  public openDialog(client: string): void {
    if (client) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: client,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.loadData();
      });
    }
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.convertToExcel(this.contact.data), this.FILENAME.CONTACT);
    } else {
      this.service.exporterToExcel(this.convertToExcel(this.contact.filteredData), this.FILENAME.CONTACT);
    }
  }

  private loadData(): void {
    this.isLoading = true;
    const subscription = this.service
      .findAllContact()
      .pipe(
        finalize(() => {
          this.contact.sort = this.sort;
          this.contact.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.isLoading = false;
        this.contact = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private convertToExcel(contacts: Contact[]): ContactExcel[] {
    const contactsConverted: ContactExcel[] = [];
    contacts.forEach((contact) => {
      contactsConverted.push({
        cedula: contact.id,
        nombres: contact.name,
        apellidos: contact.lastname,
        email: contact.email,
        celular: contact.cellphone,
        direccion: contact.address ? contact.address : '',
        estado: contact.active ? 'Activo' : 'Inactivo',
        tipo_contacto: contact.type,
        solicito_acompañamiento: contact.requestAccompaniment ? 'si' : 'no',
        fecha_registro: contact.registrationDate.toString(),
        nit: contact.nit ? contact.nit : '',
        nombre_empresa: contact.companyName ? contact.companyName : '',
        departamento_empresa: contact.companyDepartment ? contact.companyDepartment : '',
        ciudad_empresa: contact.companyCity ? contact.companyCity : '',
        direccion_empresa: contact.companyAddress ? contact.companyAddress : '',
        email_empresa: contact.companyEmail ? contact.companyEmail : '',
        telefono_empresa: contact.companyPhone ? contact.companyPhone : '',
        celular_empresa: contact.companyCellphone ? contact.companyCellphone : '',
        sitio_web: contact.companyWebsite ? contact.companyWebsite : '',
      });
    });
    return contactsConverted;
  }
}
