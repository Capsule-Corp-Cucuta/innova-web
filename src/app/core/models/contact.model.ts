import { User } from './user.model';

export class Contact extends User {
  type: ContactType;
  requestAccompaniment: boolean;
  registrationDate?: Date;

  nit?: string;
  companyName?: string;
  companyDepartment?: string;
  companyCity?: string;
  companyAddress?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyCellphone?: string;
  companyWebsite?: string;
}

export enum ContactType {
  COMPANY,
  ENTREPRENEUR,
}

export enum ContactState {
  NO_ADVISORY,
  PENDING_ADVISOR,
  ENABLED,
  DISABLED,
}
