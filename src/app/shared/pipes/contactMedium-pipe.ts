import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'ContactMedium',
})
export class ContactMediumPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'REFERIDO_DEL_MINISTERIO':
        return SharedConstants.PIPES.CONTACTMEDIUM.MINISTRY_REFERRAL;
      case 1:
      case 'REFERIDO_DE_EMPRESA':
        return SharedConstants.PIPES.CONTACTMEDIUM.BUSINESS_REFERRAL;
      case 2:
      case 'UNIVERSIADA':
        return SharedConstants.PIPES.CONTACTMEDIUM.UNIVERSITY;
      case 3:
      case 'MEDIOS_DE_COMUNICAION':
        return SharedConstants.PIPES.CONTACTMEDIUM.MASS_MEDIA;
      case 4:
      case 'SITIO_WEB':
        return SharedConstants.PIPES.CONTACTMEDIUM.WEBSITE;
      case 5:
      case 'REDES_SOCIALES':
        return SharedConstants.PIPES.CONTACTMEDIUM.SOCIAL_MEDIA;
      default:
        return SharedConstants.PIPES.CONTACTMEDIUM.OTHERS;
    }
  }
}
