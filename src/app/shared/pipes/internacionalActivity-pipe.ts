import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'InternationalActivity',
})
export class InternationalActivityPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'IMPORTACIONES':
        return SharedConstants.PIPES.INTERNATIOANALACTIVITY.IMPORT;
      case 1:
      case 'EXPORTACIONES':
        return SharedConstants.PIPES.INTERNATIOANALACTIVITY.EXPORT;
      case 2:
      case 'AMBAS':
        return SharedConstants.PIPES.INTERNATIOANALACTIVITY.BOTH;
      default:
        return SharedConstants.PIPES.INTERNATIOANALACTIVITY.DOES_NO_APPLY;
    }
  }
}
