import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'State',
})
export class StatePipe implements PipeTransform {
  public transform(value: boolean): string {
    return value ? SharedConstants.PIPES.STATES.ENABLED : SharedConstants.PIPES.STATES.DISABLED;
  }
}
