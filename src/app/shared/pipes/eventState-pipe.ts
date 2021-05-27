import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EventState',
})
export class EventStatePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.EVENTSTATE.OPEN;
      case 1:
        return SharedConstants.PIPES.EVENTSTATE.CLOSED;
      case 2:
        return SharedConstants.PIPES.EVENTSTATE.COMPLETE;
      case 3:
        return SharedConstants.PIPES.EVENTSTATE.CANCELED;
      default:
        return SharedConstants.PIPES.EVENTSTATE.POSTPONED;
    }
  }
}
