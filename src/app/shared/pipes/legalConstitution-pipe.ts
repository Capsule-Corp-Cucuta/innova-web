import { Pipe, PipeTransform } from '@angular/core';
import { SharedConstants } from '../constants/shared-constants';

@Pipe({
  name: 'LegalConstitution',
})
export class LegalConstitutionPipe implements PipeTransform {
  public transform(value: number | string): string {
    switch (value) {
      case 0:
      case 'SAS':
        return SharedConstants.PIPES.LEGALCONSTITUTION.SAS;
      case 1:
      case 'LIMITADA':
        return SharedConstants.PIPES.LEGALCONSTITUTION.LIMITED;
      case 2:
      case 'ANONIMO':
        return SharedConstants.PIPES.LEGALCONSTITUTION.ANONYMOUS;
      case 3:
      case 'PERSONA_LEGAL':
        return SharedConstants.PIPES.LEGALCONSTITUTION.LEGAL_PERSON;
      default:
        return SharedConstants.PIPES.LEGALCONSTITUTION.OTHER;
    }
  }
}
