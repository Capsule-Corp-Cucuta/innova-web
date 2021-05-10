import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'State',
})
export class StatePipe implements PipeTransform {
  public transform(value: boolean): unknown {
    switch (value) {
      case true:
        return SharedConstants.ACTIVE;
      case false:
        return SharedConstants.INACTIVE;
    }
  }
}