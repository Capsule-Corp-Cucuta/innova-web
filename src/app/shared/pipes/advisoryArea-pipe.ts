import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryArea',
})
export class AdvisoryAreaPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'BUSINESS_PLAN':
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_PLAN;
      case 1:
      case 'HUMAN_RESOURCES':
        return SharedConstants.PIPES.ADVISORYAREA.HUMAN_RESOURCES;
      case 2:
      case 'BUSINESS_ADMINISTRATION':
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_ADMINISTRATION;
      default:
        return SharedConstants.PIPES.ADVISORYAREA.FINANCING;
    }
  }
}
