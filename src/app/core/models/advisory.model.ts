import { Client } from './client.model';
import { Consultant } from './consultant.model';

export class Advisory {
  client: Client;
  consultant: Consultant;
  date: Date;
  advisoryType: AdvisoryType;
  duration?: number;
  preparationTime?: number;
  area: advisoryArea;
  notes?: string;
  state: advisoryState;
}

export enum AdvisoryType {
  INITIAL,
  FOLLOW_UP,
  CLOSING,
}

export enum advisoryArea {
  BUSINESS_PLAN,
  HUMAN_RESOURCES,
  BUSINESS_ADMINISTRATION,
  FINANCING,
}

export enum advisoryState {
  PENDING,
  REJECTED,
  COMPLETE,
}
