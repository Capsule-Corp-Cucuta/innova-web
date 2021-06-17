import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryType',
})
export class AdvisoryTypePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'INICIAL':
        return SharedConstants.PIPES.ADVISORYTYPE.INITIAL;
      case 1:
      case 'SEGUIMIENTO':
        return SharedConstants.PIPES.ADVISORYTYPE.FOLLOW_UP;
      default:
      case 'DE_CIERRE':
        return SharedConstants.PIPES.ADVISORYTYPE.CLOSING;
    }
  }
}
