import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EventType',
})
export class EventTypePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'TALK':
        return SharedConstants.PIPES.EVENTTYPE.TALK;
      case 1:
      case 'BUSINESS_FAIR':
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_FAIR;
      case 2:
      case 'COURSE':
        return SharedConstants.PIPES.EVENTTYPE.COURSE;
      case 3:
      case 'ONLINE_COURSE':
        return SharedConstants.PIPES.EVENTTYPE.ONLINE_COURSE;
      case 4:
      case 'BUSINESS_CONFERENCE':
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_CONFERENCE;
      case 5:
      case 'TELECONFERENCE':
        return SharedConstants.PIPES.EVENTTYPE.TELECONFERENCE;
      case 6:
      case 'SEMINAR':
        return SharedConstants.PIPES.EVENTTYPE.SEMINAR;
      default:
        return SharedConstants.PIPES.EVENTTYPE.WEBINAR;
    }
  }
}
