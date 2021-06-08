import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryState',
})
export class AdvisoryStatePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'PENDING':
        return SharedConstants.PIPES.ADVISORYSTATE.PENDING;
      case 1:
      case 'REJECTED':
        return SharedConstants.PIPES.ADVISORYSTATE.REJECTED;
      default:
        return SharedConstants.PIPES.ADVISORYSTATE.COMPLETE;
    }
  }
}
