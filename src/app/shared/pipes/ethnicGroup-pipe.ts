import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EthnicGroup',
})
export class EthnicGroupPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'GITANO':
        return SharedConstants.PIPES.ETHNICGROUP.GYPSY;
      case 1:
      case 'INDIGENA':
        return SharedConstants.PIPES.ETHNICGROUP.INDIGENOUS;
      case 2:
      case 'AFRO_COLOMBIANO':
        return SharedConstants.PIPES.ETHNICGROUP.AFRO_COLOMBIAN;
      case 3:
      case ' RAIZALES':
        return SharedConstants.PIPES.ETHNICGROUP.RAIZALES;
      default:
        return SharedConstants.PIPES.ETHNICGROUP.OTHER;
    }
  }
}
