export class Advisory {
  id?: number;
  consultantId: string;
  clientId: string;
  subject: string;
  type: AdvisoryType;
  area: AdvisoryArea;
  state: AdvisoryState;
  date: Date;
  durationInHours?: number;
  preparationTypeInHours?: number;
  notes?: string;
}

export enum AdvisoryType {
  INICIAL = 'INICIAL',
  SEGUIMIENTO = 'SEGUIMIENTO',
  DE_CIERRE = 'DE_CIERRE',
}

export enum AdvisoryArea {
  PLAN_DE_NEGOCIOS = 'PLAN_DE_NEGOCIOS',
  RECURSOS_HUMANOS = 'RECURSOS_HUMANOS',
  ADMINISTRACION_DE_EMPRESAS = 'ADMINISTRACION_DE_EMPRESAS',
  FINANCIAMIENTO = 'FINANCIAMIENTO',
}

export enum AdvisoryState {
  PENDIENTE = 'PENDIENTE',
  RECHAZADA = 'RECHAZADA',
  COMPLETADA = 'COMPLETADA',
}
