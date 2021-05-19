import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EthnicGroup',
})
export class EthnicGroupPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.ETHNICGROUP.GYPSY;
      case 1:
        return SharedConstants.PIPES.ETHNICGROUP.INDIGENOUS;
      case 2:
        return SharedConstants.PIPES.ETHNICGROUP.AFRO_COLOMBIAN;
      case 3:
        return SharedConstants.PIPES.ETHNICGROUP.RAIZALES;
      default:
        return SharedConstants.PIPES.ETHNICGROUP.OTHER;
    }
  }
}
