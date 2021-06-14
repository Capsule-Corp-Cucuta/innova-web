import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'Option',
})
export class OptionPipe implements PipeTransform {
  public transform(value: boolean): string {
    switch (value) {
      case true:
        return SharedConstants.PIPES.OPTION.YES;
      default:
        return SharedConstants.PIPES.OPTION.NOT;
    }
  }
}
