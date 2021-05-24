import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryState',
})
export class AdvisoryStatePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.ADVISORYSTATE.PENDING;
      case 1:
        return SharedConstants.PIPES.ADVISORYSTATE.REJECTED;
      default:
        return SharedConstants.PIPES.ADVISORYSTATE.COMPLETE;
    }
  }
}
