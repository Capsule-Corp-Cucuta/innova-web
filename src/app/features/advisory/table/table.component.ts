import { Component, OnInit, ViewChild } from '@angular/core';

import { IconConstants } from '../../../shared/constants/icon-constants';
import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../shared/styles/table.component.scss']
})
export class TableComponent implements OnInit {

  public adviser: MatTableDataSource<[]>;
  public advisers: [] = [];
  public option:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public readonly ICONS = IconConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.LIST;
  public readonly CELLS = LabelConstants.LABELS.ADVISORY.LIST.CELLS;
  public readonly COLUMNS = LabelConstants.LABELS.ADVISORY.LIST.COLUMNS;


  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit():void {
    this.adviser.paginator = this.paginator;
    this.adviser.sort = this.sort;
  }

  
  public applyFilter(event: Event) : void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.adviser.filter = filterValue.trim().toLowerCase();

    if (this.adviser.paginator) {
      this.adviser.paginator.firstPage();
    }
  }

  public activateAndDeactivate(IdAsesor:string,state:boolean):void{

    this.option = "activar";
    
    if(!state){
     this.option= "inactivar";
    }

    Swal.fire({
      title: 'Estas Seguro?',
      text: 'De ' + this.option + ' el asesor',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  private loadData(): void {
    
  }

}
