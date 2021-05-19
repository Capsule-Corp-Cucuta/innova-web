import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'State',
})
export class StatePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.STATES.NO_ADVISORY;
      case 1:
        return SharedConstants.PIPES.STATES.PENDING_ADVISOR;
      case 2:
        return SharedConstants.PIPES.STATES.ENABLED;
      default:
        return SharedConstants.PIPES.STATES.DISABLED;
    }
  }
}
