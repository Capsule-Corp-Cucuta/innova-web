import { Contact } from './contact.model';
import { Consultant } from './consultant.model';

export class Client extends Contact {
  consultant: Consultant;

  contactDepartment?: string;
  contactCity?: string;
  contactPhone?: string;
  position?: string;
  antiquity?: string;
  birthplace?: string;
  birthdate?: Date;
  educationalLevel?: EducationalLevel;
  gender?: Gender;
  ethnicGroup?: EthnicGroup;
  isDisplaced?: boolean;
  isHandicapped?: boolean;
  legalRepresentative?: Contact;
  legalConstitution?: LegalConstitution;
  otherLegalConstitution?: string;
  constitutionDate?: Date;
  numberOfEmployees?: number;
  numberOfFullTimeEmployees?: number;
  numberOfPartTimeEmployees?: number;
  numberOfDirectEmployees?: number;
  numberOfIndirectEmployees?: number;
  companyType?: CompanyType;
  otherCompanyType?: string;
  hasComercialRegister?: boolean;
  comercialRegisterNumber?: string;
  lastYearOfRenovation?: Date;
  internationalActivity?: InternationalActivity;
  internationalActivityCountries?: string;
  isEcommerce?: boolean;
  servicesProductsOffered?: string;
  contactMedium?: ContactMedium;
  observations?: string;
}

export enum EducationalLevel {
  PRIMARY,
  BACHELOR,
  TECHNICAL,
  PROFESSIONAL,
  POSTGRADUATE,
  OTHERS,
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

export enum EthnicGroup {
  GYPSY,
  INDIGENOUS,
  AFRO_COLOMBIAN,
  RAIZALES,
  OTHER,
}

export enum LegalConstitution {
  SAS,
  LIMITED,
  ANONYMOUS,
  LEGAL_PERSON,
  OTHER,
}

export enum CompanyType {
  INDUSTRIAL,
  WHOLESALE,
  RETAIL,
  SERVICES,
  AGROINDUSTRIAL,
}

export enum InternationalActivity {
  IMPORT,
  EXPORT,
  BOTH,
  DOES_NO_APPLY,
}

export enum ContactMedium {
  MINISTRY_REFERRAL,
  BUSINESS_REFERRAL,
  UNIVERSITY,
  MASS_MEDIA,
  WEBSITE,
  SOCIAL_MEDIA,
  OTHERS,
}
