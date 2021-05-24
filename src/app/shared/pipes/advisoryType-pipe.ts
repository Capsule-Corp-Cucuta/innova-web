import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryType',
})
export class AdvisoryTypePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.ADVISORYTYPE.INITIAL;
      case 1:
        return SharedConstants.PIPES.ADVISORYTYPE.FOLLOW_UP;
      default:
        return SharedConstants.PIPES.ADVISORYTYPE.CLOSING;
    }
  }
}
