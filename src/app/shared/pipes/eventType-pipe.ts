import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EventType',
})
export class EventTypePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.EVENTTYPE.TALK;
      case 1:
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_FAIR;
      case 2:
        return SharedConstants.PIPES.EVENTTYPE.COURSE;
      case 3:
        return SharedConstants.PIPES.EVENTTYPE.ONLINE_COURSE;
      case 4:
        return SharedConstants.PIPES.EVENTTYPE.BUSINESS_CONFERENCE;
      case 5:
        return SharedConstants.PIPES.EVENTTYPE.TELECONFERENCE;
      case 6:
        return SharedConstants.PIPES.EVENTTYPE.SEMINAR;
      default:
        return SharedConstants.PIPES.EVENTTYPE.WEBINAR;
    }
  }
}
