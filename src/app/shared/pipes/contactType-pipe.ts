import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'ContactType',
})
export class ContactTypePipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'EMPRESA':
        return SharedConstants.PIPES.CONTACTTYPE.COMPANY;
      default:
        return SharedConstants.PIPES.CONTACTTYPE.ENTREPRENEUR;
    }
  }
}
