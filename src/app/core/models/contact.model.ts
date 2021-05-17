import { User } from './user.model';

export class Contact extends User {
  contactType: ContactType;
  registrationDate: Date;
  state: ContactState;

  companyName?: string;
  nit?: string;
  department?: string;
  city?: string;
  phone?: string;
  website?: string;
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
