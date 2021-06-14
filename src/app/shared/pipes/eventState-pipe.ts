import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EventState',
})
export class EventStatePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'ABIERTO':
        return SharedConstants.PIPES.EVENTSTATE.OPEN;
      case 1:
      case 'CERRADO':
        return SharedConstants.PIPES.EVENTSTATE.CLOSED;
      case 2:
      case 'COMPLETADO':
        return SharedConstants.PIPES.EVENTSTATE.COMPLETE;
      case 3:
      case 'CANCELADO':
        return SharedConstants.PIPES.EVENTSTATE.CANCELED;
      default:
      case 'POSPUESTO':
        return SharedConstants.PIPES.EVENTSTATE.POSTPONED;
    }
  }
}
