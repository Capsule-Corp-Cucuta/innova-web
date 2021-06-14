import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'CompanyType',
})
export class CompanyTypePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'INDUSTRIAL':
        return SharedConstants.PIPES.COMPANYTYPE.INDUSTRIAL;
      case 1:
      case 'VENTAS_AL_MAYOR':
        return SharedConstants.PIPES.COMPANYTYPE.WHOLESALE;
      case 2:
      case 'VENTAS_AL_DETAL':
        return SharedConstants.PIPES.COMPANYTYPE.RETAIL;
      case 3:
      case 'SERVICIOS':
        return SharedConstants.PIPES.COMPANYTYPE.SERVICES;
      default:
        return SharedConstants.PIPES.COMPANYTYPE.AGROINDUSTRIAL;
    }
  }
}
