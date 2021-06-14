import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'AdvisoryArea',
})
export class AdvisoryAreaPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'PLAN_DE_NEGOCIOS':
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_PLAN;
      case 1:
      case 'RECURSOS_HUMANOS':
        return SharedConstants.PIPES.ADVISORYAREA.HUMAN_RESOURCES;
      case 2:
      case 'ADMINISTRACION_DE_EMPRESAS':
        return SharedConstants.PIPES.ADVISORYAREA.BUSINESS_ADMINISTRATION;
      default:
        return SharedConstants.PIPES.ADVISORYAREA.FINANCING;
    }
  }
}
