import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EducationLevel',
})
export class EducationLevelPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'PRIMARIA':
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.PRIMARY;
      case 1:
      case 'BACHILLER':
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.BACHELOR;
      case 2:
      case 'TECNICO':
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.TECHNICAL;
      case 3:
      case 'PROFESIONAL':
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.PROFESSIONAL;
      case 4:
      case 'POSGRADO':
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.POSTGRADUATE;
      default:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.OTHERS;
    }
  }
}
