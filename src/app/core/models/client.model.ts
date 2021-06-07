import { Contact } from './contact.model';

export class Client extends Contact {
  contactDepartment?: string;
  contactCity?: string;
  contactPhone?: string;
  positionInCompany?: string;
  dateOfEntryToCompany?: Date;
  birthplace?: string;
  birthdate?: Date;
  educationalLevel?: EducationalLevel;
  gender?: Gender;
  ethnicGroup?: EthnicGroup;
  isDisplaced?: boolean;
  isHandicapped?: boolean;
  companyLegalRepresentative?: Contact;
  companyLegalConstitution?: LegalConstitution;
  otherLegalConstitution?: string;
  companyConstitutionDate?: Date;
  companyNumberOfEmployees?: number;
  companyNumberOfFullTimeEmployees?: number;
  companyNumberOfPartTimeEmployees?: number;
  companyNumberOfDirectEmployees?: number;
  companyNumberOfIndirectEmployees?: number;
  ccompanySector?: CompanySector;
  otherCompanySector?: string;
  hasComercialRegister?: boolean;
  comercialRegisterNumber?: string;
  principalCodeCiiu?: string;
  lastYearOfRenovation?: Date;
  internationalActivity?: InternationalActivity;
  internationalActivityCountries?: string;
  isEcommerce?: boolean;
  servicesProductsOffered?: string;
  discoveryChannel?: DiscoveryChannel;
  observations?: string;
  consultantId: string;
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

export enum CompanySector {
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

export enum DiscoveryChannel {
  MINISTRY_REFERRAL,
  BUSINESS_REFERRAL,
  UNIVERSITY,
  MASS_MEDIA,
  WEBSITE,
  SOCIAL_MEDIA,
  OTHERS,
}
