import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { UrlConstants } from '../../../shared/constants/url-constants';
import { LabelConstants } from '../../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';
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

  public readonly ICONS = LabelConstants.ICONS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.ADVISORY.LIST;
 
 
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
    this.option = state === true ? SharedConstants.ACTIVATE : SharedConstants.DEACTIVATE; 

    Swal.fire({
      title: SharedConstants.ALERTACTIVATE.TITLE,
      text: SharedConstants.ALERTACTIVATE.TEXT + this.option + SharedConstants.ALERTACTIVATE.TEXTEND,
      icon:'warning',
      showCancelButton: true,
      confirmButtonText:SharedConstants.ALERTACTIVATE.TOACCEPT,
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
    //TODO
  }

}
