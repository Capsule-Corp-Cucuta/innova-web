import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'LegalConstitution',
})
export class LegalConstitutionPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 0:
        return SharedConstants.PIPES.LEGALCONSTITUTION.SAS;
      case 1:
        return SharedConstants.PIPES.LEGALCONSTITUTION.LIMITED;
      case 2:
        return SharedConstants.PIPES.LEGALCONSTITUTION.ANONYMOUS;
      case 3:
        return SharedConstants.PIPES.LEGALCONSTITUTION.LEGAL_PERSON;
      default:
        return SharedConstants.PIPES.LEGALCONSTITUTION.OTHER;
    }
  }
}
