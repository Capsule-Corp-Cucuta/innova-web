import { Inscription } from './inscription.model';

export class InnovaEvent {
  id?: number;
  title: string;
  theme: string;
  description: string;
  type: EventType;
  state?: EventState;
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
  CHARLA = 'CHARLA',
  FERIA_DE_NEGOCIOS = 'FERIA_DE_NEGOCIOS',
  CURSO = 'CURSO',
  CURSO_EN_LINEA = 'CURSO_EN_LINEA',
  CONFERENCIA_DE_NEGOCIOS = 'CONFERENCIA_DE_NEGOCIOS',
  TELECONFERENCIA = 'TELECONFERENCIA',
  SEMINARIO = 'SEMINARIO',
  WEBINAR = 'WEBINAR',
}

export enum EventState {
  ABIERTO = 'ABIERTO',
  CERRADO = 'CERRADO',
  COMPLETADO = 'COMPLETADO',
  CANCELADO = 'CANCELADO',
  POSPUESTO = 'POSPUESTO',
}
