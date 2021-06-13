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
  companySector?: CompanySector;
  otherCompanySector?: string;
  hasCommercialRegister?: boolean;
  commercialRegisterNumber?: string;
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
  PRIMARIA,
  BACHILLER,
  TECNICO,
  PROFESIONAL,
  POSGRADO,
  OTRO,
}

export enum Gender {
  MASCULINO,
  FEMENINO,
  OTRO,
}

export enum EthnicGroup {
  GITANO,
  INDIGENA,
  AFRO_COLOMBIANO,
  RAIZALES,
  OTRO,
}

export enum LegalConstitution {
  SAS,
  LIMITADA,
  ANONIMO,
  PERSONA_LEGAL,
  OTRO,
}

export enum CompanySector {
  INDUSTRIAL,
  VENTAS_AL_MAYOR,
  VENTAS_AL_DETAL,
  SERVICIOS,
  AGROINDUSTRIAL,
}

export enum InternationalActivity {
  IMPORTACIONES,
  EXPORTACIONES,
  AMBAS,
  NO_APLICA,
}

export enum DiscoveryChannel {
  REFERIDO_DEL_MINISTERIO,
  REFERIDO_DE_EMPRESA,
  UNIVERSIADA,
  MEDIOS_DE_COMUNICAION,
  SITIO_WEB,
  REDES_SOCIALES,
  OTROS,
}
