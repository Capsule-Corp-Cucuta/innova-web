export class Advisory {
  id?: number;
  consultantId: string;
  clientId: string;
  subject: string;
  type: AdvisoryType;
  area: AdvisoryArea;
  state: AdvisoryState;
  date?: Date;
  durationInHours?: number;
  preparationTypeInHours?: number;
  notes?: string;
}

export enum AdvisoryType {
  INITIAL,
  FOLLOW_UP,
  CLOSING,
}

export enum AdvisoryArea {
  BUSINESS_PLAN,
  HUMAN_RESOURCES,
  BUSINESS_ADMINISTRATION,
  FINANCING,
}

export enum AdvisoryState {
  PENDING,
  REJECTED,
  COMPLETE,
}
