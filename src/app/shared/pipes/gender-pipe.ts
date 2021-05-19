import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'Gender',
})
export class GenderPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.GENDER.MALE;
      case 1:
        return SharedConstants.PIPES.GENDER.FEMALE;
      default:
        return SharedConstants.PIPES.GENDER.OTHER;
    }
  }
}
