export class Advisory {
  id?: number;
  clientId: string;
  consultantId: string;
  date: Date;
  type: AdvisoryType;
  durationInHours?: number;
  preparationTypeInHours?: number;
  area: AdvisoryArea;
  notes?: string;
  subject?: string;
  state: AdvisoryState;
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
