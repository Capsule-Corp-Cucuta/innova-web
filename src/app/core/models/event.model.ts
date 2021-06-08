import { Inscription } from './inscription.model';

export class Event {
  id?: number;
  title: string;
  theme: string;
  description: string;
  type: EventType;
  state: EventState;
  startDate: Date;
  closeDate: Date;
  registrationDeadlineDate: Date;
  eventDurationInHours?: number;
  department?: string;
  city?: string;
  place?: string;
  email: string;
  link?: string;
  inscriptions?: Inscription[];
}

export enum EventType {
  TALK,
  BUSINESS_FAIR,
  COURSE,
  ONLINE_COURSE,
  BUSINESS_CONFERENCE,
  TELECONFERENCE,
  SEMINAR,
  WEBINAR,
}

export enum EventState {
  OPEN,
  CLOSED,
  COMPLETE,
  CANCELED,
  POSTPONED,
}
