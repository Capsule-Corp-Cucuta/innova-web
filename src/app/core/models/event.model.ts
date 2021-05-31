export class Event {
  id?: number;
  title: string;
  startDate: Date;
  closeDate?: Date;
  registrationDeadline?: Date;
  eventTime: string;
  eventDurationInHours?: number;
  theme: string;
  description: string;
  type: EventType;
  state: EventState;
  department: string;
  city: string;
  place: string;
  email: string;
  link: string;
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
