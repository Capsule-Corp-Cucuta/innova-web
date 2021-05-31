import { Injectable } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { SharedConstants } from '../constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class ExporterService {
  public readonly EXCEL_TYPE = SharedConstants.EXPORTSERVICE.EXCEL_TYPE;
  public readonly EXCEL_EXT = SharedConstants.EXPORTSERVICE.EXCEL_EXT;

  public exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: [SharedConstants.EXPORTSERVICE.SHEETNAMES.DATA],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    this.saveAsExcel(excelBuffer, excelFileName);
  }

  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + SharedConstants.EXPORTSERVICE._EXPORT_ + this.EXCEL_EXT,
    );
  }
}
