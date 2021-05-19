import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'CompanyType',
})
export class CompanyTypePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.COMPANYTYPE.INDUSTRIAL;
      case 1:
        return SharedConstants.PIPES.COMPANYTYPE.WHOLESALE;
      case 2:
        return SharedConstants.PIPES.COMPANYTYPE.RETAIL;
      case 3:
        return SharedConstants.PIPES.COMPANYTYPE.SERVICES;
      default:
        return SharedConstants.PIPES.COMPANYTYPE.AGROINDUSTRIAL;
    }
  }
}
