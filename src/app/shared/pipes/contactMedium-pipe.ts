import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'ContactMedium',
})
export class ContactMediumPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.CONTACTMEDIUM.MINISTRY_REFERRAL;
      case 1:
        return SharedConstants.PIPES.CONTACTMEDIUM.BUSINESS_REFERRAL;
      case 2:
        return SharedConstants.PIPES.CONTACTMEDIUM.UNIVERSITY;
      case 3:
        return SharedConstants.PIPES.CONTACTMEDIUM.MASS_MEDIA;
      case 4:
        return SharedConstants.PIPES.CONTACTMEDIUM.WEBSITE;
      case 5:
        return SharedConstants.PIPES.CONTACTMEDIUM.SOCIAL_MEDIA;
      default:
        return SharedConstants.PIPES.CONTACTMEDIUM.OTHERS;
    }
  }
}
