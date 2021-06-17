import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Client } from '../../../core/models/client.model';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { FacadeService } from '../../../shared/services/facade.service';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
import { ClientExcel } from 'src/app/core/models/client-excel.model';

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
  public readonly LABELS = LabelConstants.LABELS.CLIENT.LIST;

  public filter = '';
  public user: string;
  public option: string;
  public clients: [] = [];
  public isLoading = false;
  public authority: string;
  public client: MatTableDataSource<Client>;

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
    this.client.filter = filterValue.trim().toLowerCase();

    if (this.client.paginator) {
      this.client.paginator.firstPage();
    }
  }

  public Deactivate(idClient: string, state: boolean): void {
    this.option = state === false ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE;

    Swal.fire({
      title: SharedConstants.ALERTACTIVATE.TITLE,
      text: SharedConstants.ALERTACTIVATE.TEXT + this.option + SharedConstants.ALERTACTIVATE.TEXTCLIENT,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: SharedConstants.ALERTACTIVATE.TOACCEPT,
      cancelButtonText: SharedConstants.ALERTACTIVATE.CANCEL,
    }).then((result) => {
      if (result.value) {
        this.option = state === false ? SharedConstants.ACTIVE : SharedConstants.INACTIVE;

        const subscription = this.service
          .enableAndDisableUser(idClient)
          .pipe(finalize(() => this.loadData()))
          .subscribe(
            () => {
              Swal.fire(
                SharedConstants.ALERTSUCCESS.TITLE,
                this.option + SharedConstants.ALERTSUCCESS.CLIENT,
                'success',
              );
            },
            () => {
              Swal.fire(SharedConstants.ALERTERROR.TITLE, this.option + SharedConstants.ALERTERROR.CLIENT, 'error');
            },
          );
        this.subscriptions.push(subscription);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //TODO
      }
    });
  }

  public exportAsXLSX(): void {
    if (this.filter.length == 0) {
      this.service.exporterToExcel(this.convertToExcel(this.client.data), this.FILENAME.CLIENT);
    } else {
      this.service.exporterToExcel(this.convertToExcel(this.client.filteredData), this.FILENAME.CLIENT);
    }
  }

  private loadData(): void {
    this.isLoading = true;
    const subscription = this.findAllEvents()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.client.sort = this.sort;
          this.client.paginator = this.paginator;
        }),
      )
      .subscribe((resp) => {
        this.client = new MatTableDataSource(resp);
      });
    this.subscriptions.push(subscription);
  }

  private findAllEvents(): Observable<Client[]> {
    return this.service.getAuthorities()[0] === SharedConstants.ROLES.ADMIN
      ? this.service.findAllClient()
      : this.service.findClientByConsultant(this.user);
  }

  private convertToExcel(clients: Client[]): ClientExcel[] {
    const clientsConverted: ClientExcel[] = [];
    clients.forEach((client) => {
      clientsConverted.push({
        id_client: client.id,
        fecha_registro: client.registrationDate.toString(),
        tipo_cliente: client.type,
        nombres: client.name,
        apellidos: client.lastname,
        cargo: client.positionInCompany ? client.positionInCompany : '',
        antiguedad: client.dateOfEntryToCompany ? client.dateOfEntryToCompany.toString() : '',
        lugar_de_nacimiento: client.birthplace ? client.birthplace : '',
        fecha_nacimiento: client.birthdate ? client.birthdate.toString() : '',
        nivel_de_educacion: client.educationalLevel ? client.educationalLevel.toString() : '',
        direccion_contacto: client.address ? client.address : '',
        ciudad: client.contactCity ? client.contactCity : '',
        Departamento: client.contactDepartment ? client.contactDepartment : '',
        telefono: client.contactPhone ? client.contactPhone : '',
        celular: client.cellphone ? client.cellphone : '',
        email: client.email ? client.email : '',
        genero: client.gender ? client.gender.toString() : '',
        grupo_etnico: client.ethnicGroup ? client.ethnicGroup.toString() : '',
        desplazado: client.displaced ? 'si' : 'no',
        discapacitado: client.handicapped ? 'si' : 'no',
        nombre_empresa: client.companyName ? client.companyName : '',
        nit: client.nit ? client.nit : '',
        departamento_empresa: client.companyDepartment ? client.companyDepartment : '',
        ciudad_empresa: client.companyCity ? client.companyCity : '',
        direccion_empresa: client.companyAddress ? client.companyAddress : '',
        email_empresa: client.companyEmail ? client.companyEmail : '',
        telefono_empresa: client.companyPhone ? client.companyPhone : '',
        celular_empresa: client.companyCellphone ? client.companyCellphone : '',
        sitio_empresa: client.companyWebsite ? client.companyWebsite : '',
        representante_legal: client.companyLegalRepresentative ? client.companyLegalRepresentative.toString() : '',
        constitucion_legal: client.companyLegalConstitution ? client.companyLegalConstitution.toString() : '',
        otra_constitucion_legal: client.otherLegalConstitution ? client.otherLegalConstitution : '',
        fecha_de_constitucion: client.companyConstitutionDate ? client.companyConstitutionDate.toString() : '',
        numero_empleados: client.companyNumberOfEmployees ? client.companyNumberOfEmployees.toString() : '',
        empleados_tc: client.companyNumberOfFullTimeEmployees ? client.companyNumberOfFullTimeEmployees.toString() : '',
        empleados_mt: client.companyNumberOfPartTimeEmployees ? client.companyNumberOfPartTimeEmployees.toString() : '',
        empleados_directos: client.companyNumberOfDirectEmployees
          ? client.companyNumberOfDirectEmployees.toString()
          : '',
        empledos_indirectos: client.companyNumberOfPartTimeEmployees
          ? client.companyNumberOfPartTimeEmployees.toString()
          : '',
        sector_empresa: client.companySector ? client.companySector.toString() : '',
        otro_sector_empresa: client.otherCompanySector ? client.otherCompanySector : '',
        registro_comercial: client.hasCommercialRegister ? 'si' : 'no',
        numero_registro_comercial: client.commercialRegisterNumber ? client.commercialRegisterNumber : '',
        ultimo_ano_renovacion: client.lastYearOfRenovation ? client.lastYearOfRenovation.toString() : '',
        ciiu: client.principalCodeCiiu ? client.principalCodeCiiu : '',
        actividad_internacional: client.internationalActivity ? client.internationalActivity.toString() : '',
        paises_actividad_internacional: client.internationalActivityCountries
          ? client.internationalActivityCountries
          : '',
        ventas_en_linea: client.ecommerce ? 'si' : 'no',
        servicios_productos: client.servicesProductsOffered ? client.servicesProductsOffered : '',
        medio_comunicacion: client.discoveryChannel ? client.discoveryChannel.toString() : '',
        observaciones: client.observations ? client.observations : '',
        estado: client.active ? 'Activo' : 'Inactivo',
        asesor_asignado: client.consultantId.toString(),
      });
    });

    return clientsConverted;
  }
}
