import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'EducationLevel',
})
export class EducationLevelPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.PRIMARY;
      case 1:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.BACHELOR;
      case 2:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.TECHNICAL;
      case 3:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.PROFESSIONAL;
      case 4:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.POSTGRADUATE;
      default:
        return SharedConstants.PIPES.EDUCATIONAL_LEVEL.OTHERS;
    }
  }
}
