import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryArea',
})
export class AdvisoryAreaPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_PLAN;
      case 1:
        return SharedConstants.PIPES.ADVISORYAREA.HUMAN_RESOURCES;
      case 2:
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_ADMINISTRATION;
      default:
        return SharedConstants.PIPES.ADVISORYAREA.FINANCING;
    }
  }
}
