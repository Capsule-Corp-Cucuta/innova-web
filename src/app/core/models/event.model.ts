export class Event {
  title: string;
  startDate: Date;
  closeDate?: Date;
  registrationDeadline?: Date;
  eventTime: string;
  eventDuration?: string;
  theme: string;
  description: string;
  eventType: EventType;
  eventState: EventState;
  department: string;
  city: string;
  place: string;
  contactEmail: string;
  eventLink: string;
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
