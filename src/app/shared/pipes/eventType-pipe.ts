import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EventType',
})
export class EventTypePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'CHARLA':
        return SharedConstants.PIPES.EVENTTYPE.TALK;
      case 1:
      case 'FERIA_DE_NEGOCIOS':
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_FAIR;
      case 2:
      case 'CURSO':
        return SharedConstants.PIPES.EVENTTYPE.COURSE;
      case 3:
      case 'CURSO_EN_LINEA':
        return SharedConstants.PIPES.EVENTTYPE.ONLINE_COURSE;
      case 4:
      case 'CONFERENCIA_DE_NEGOCIOS':
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_CONFERENCE;
      case 5:
      case 'TELECONFERENCIA':
        return SharedConstants.PIPES.EVENTTYPE.TELECONFERENCE;
      case 6:
      case 'SEMINARIO':
        return SharedConstants.PIPES.EVENTTYPE.SEMINAR;
      default:
        return SharedConstants.PIPES.EVENTTYPE.WEBINAR;
    }
  }
}
