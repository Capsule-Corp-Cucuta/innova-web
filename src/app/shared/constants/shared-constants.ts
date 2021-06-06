export class SharedConstants {
  static readonly EMAIL = 'email';
  static readonly PASSWORD = 'password';
  static readonly BUSINESS = 'Empresa';
  static readonly ACTIVATE = 'activar';
  static readonly DEACTIVATE = 'inactivar';
  static readonly ACTIVE = 'Activo';
  static readonly INACTIVE = 'Inactivo';
  static readonly CHECK = 'check';
  static readonly ID = 'id';

  static readonly PIPES = {
    CONTACTTYPE: {
      COMPANY: 'Empresa',
      ENTREPRENEUR: 'Emprendedor',
    },
    STATES: {
      NO_ADVISORY: 'No ha solicitado seguimiento',
      PENDING_ADVISOR: 'Pendiente de asignar asesor',
      ENABLED: 'Activo',
      DISABLED: 'Inactivo',
    },
    EDUCATIONAL_LEVEL: {
      PRIMARY: 'Primaria',
      BACHELOR: 'Bachiller',
      TECHNICAL: 'Técnico',
      PROFESSIONAL: 'Profesional',
      POSTGRADUATE: 'Postgrado',
      OTHERS: 'otro',
    },
    GENDER: {
      MALE: 'Masculino',
      FEMALE: 'Femenino',
      OTHER: 'Otro',
    },
    ETHNICGROUP: {
      GYPSY: 'Gitano',
      INDIGENOUS: 'Indigena',
      AFRO_COLOMBIAN: 'Afrocolombiano',
      RAIZALES: 'Raizales',
      OTHER: 'Otro',
    },
    LEGALCONSTITUTION: {
      SAS: 'Sas',
      LIMITED: 'Limitada',
      ANONYMOUS: 'Anónima',
      LEGAL_PERSON: 'Persona legal',
      OTHER: 'Otro',
    },
    COMPANYTYPE: {
      INDUSTRIAL: 'Industrial',
      WHOLESALE: 'Venta al por mayor',
      RETAIL: 'Venta al por menor',
      SERVICES: 'Servicios',
      AGROINDUSTRIAL: 'Agroindustrial',
    },
    INTERNATIOANALACTIVITY: {
      IMPORT: 'Importar',
      EXPORT: 'Exportar',
      BOTH: 'Ambas cosas',
      DOES_NO_APPLY: 'No aplica',
    },
    CONTACTMEDIUM: {
      MINISTRY_REFERRAL: 'Referido de ministerio',
      BUSINESS_REFERRAL: 'Referido de empresario',
      UNIVERSITY: 'Universidad',
      MASS_MEDIA: 'Medios masivos',
      WEBSITE: 'Pagina web',
      SOCIAL_MEDIA: 'Redes sociales',
      OTHERS: 'Otros',
    },
    OPTION: {
      YES: 'Si',
      NOT: 'No',
    },
    ADVISORYTYPE: {
      INITIAL: 'Inicial',
      FOLLOW_UP: 'Seguimiento',
      CLOSING: 'Clausura',
    },
    ADVISORYAREA: {
      BUSINESS_PLAN: 'Plan de negocios',
      HUMAN_RESOURCES: 'Recursos humanos',
      BUSINESS_ADMINISTRATION: 'Admin. de empresas',
      FINANCING: 'Financiacion',
    },
    ADVISORYSTATE: {
      PENDING: 'Pendiente',
      REJECTED: 'Rechazada',
      COMPLETE: 'Completa',
    },
    EVENTTYPE: {
      TALK: 'Charla',
      BUSINESS_FAIR: 'Feria Empresarial',
      COURSE: 'Curso',
      ONLINE_COURSE: 'Curso en linea',
      BUSINESS_CONFERENCE: 'Rueda de Negocios',
      TELECONFERENCE: 'Teleconferencia',
      SEMINAR: 'Seminario',
      WEBINAR: 'Webinar',
    },
    EVENTSTATE: {
      OPEN: 'Abierto',
      CLOSED: 'Cerrado',
      COMPLETE: 'Completo',
      CANCELED: 'Cancelado',
      POSTPONED: 'Aplazado',
    },
  };

  static readonly ALERTACTIVATE = {
    TITLE: '¿Estás seguro?',
    TEXT: 'De ',
    TEXTADVISER: ' el asesor',
    TEXTCLIENT: ' el cliente',
    TOACCEPT: 'Aceptar',
    CANCEL: 'Cancelar',
  };

  static readonly ALERTSUCCESS = {
    TITLE: '¡Exito!',
    TEXTCREATE: 'Se registro ',
    TEXTUPDATE: 'Se actualizo ',
    TEXTASSIGN: 'Se asigno asesor',
    TEXTDISABLE: 'Se inactivo ',
    TEXTENABLE: 'Se activo ',
    TEXTEMAIL: 'Se ha enviado contraseña al correo electrónico ingresado.',
    TEXTCHANGE: 'Se ha cambiado la contraseña.',
    ADVISER: ' la asesoria',
    CLIENT: ' el cliente',
    CONSULTANT: ' el asesor',
    EVENT: ' el evento',
    CONTACT:
      ' el contacto, revisa tu correo electrónico, se te ha asignado una contraseña de ingreso.',
    USER: 'usuario',
    ATTENDANCE: ' la asistencia',
    EVENT_INSCRIPTION: 'Se ha registro inscrion a evento',
    EMAIL: 'Se envio correo electrónico con la contraseña',
    TOACCEPT: 'OK',
  };

  static readonly ALERTERROR = {
    TITLE: '¡Error!',
    TEXTCREATE: 'Se ha producido un error registrando',
    TEXTUPDATE: 'Se ha producido un error actualizando',
    TEXTASSIGN: 'Se ha producido un error asignando el asesor',
    TEXTDISABLE: 'Se ha producido un error inactivando el ',
    TEXTENABLE: 'Se ha producido un error acitvando el ',
    TEXTEMAIL: 'Se ha producido un error al enviar correo',
    TEXTCHANGE: 'Se ha producido un error al cambiar la contraseña',
    ADVISER: ' la asesoria',
    CLIENT: ' el cliente',
    CONSULTANT: ' el asesor',
    EVENT: ' el evento',
    CONTACT: ' el contacto',
    USER: ' el usuario',
    ATTENDANCE: ' la asistencia',
    EVENT_INSCRIPTION: ' la inscripcion al evento',
    EMAIL: 'Se ha producido un error al enviar el correo',
    EMAILEXIST: 'El correo electrònico no se encuentra registrado',
    TOACCEPT: 'OK',
  };

  static readonly STETP = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
  };

  static readonly FILENAMES = {
    CONTACT: 'Contactos',
    CLIENT: 'Clientes',
    CONSULTANT: 'Asesores',
    ADVISER: 'Asesorias',
    EVENT: 'Eventos',
    HOUR: 'Horas_Asesor',
    ATTENDANCE: 'Asistencia_Evento',
  };

  static readonly EXPORTSERVICE = {
    EXCEL_TYPE:
      'application/vnd.openxmlformats-officedocument.spreadsheetml; charset=UTF-8',
    EXCEL_EXT: '.xlsx',
    SHEETNAMES: {
      DATA: 'data',
    },
    _EXPORT_: '_export_',
  };

  static readonly ROLES = {
    ADMIN: 'ADMIN',
    CONSULTANT: 'CONSULTANT',
    CONTACT: 'CONTACT',
    CLIENT: 'CLIENT',
  };
}
