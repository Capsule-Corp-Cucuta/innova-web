export class SharedConstants {
  static readonly EMAIL = 'email';
  static readonly PASSWORD = 'password';
  static readonly BUSINESS = 'Empresa';
  static readonly ACTIVATE = 'activar';
  static readonly DEACTIVATE = 'inactivar';
  static readonly ACTIVE = 'Activo';
  static readonly INACTIVE = 'Inactivo';

  static readonly PIPES = {
    CONTACTTYPE: {
      COMPANY: 'Empresa',
      ENTREPRENEUR: 'Emprendedor',
    },
    STATES: {
      NO_ADVISORY: 'Sin asignar',
      PENDING_ADVISOR: 'Pendiente de asignar',
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
    ADVISER: ' asesoria',
    CLIENT: ' cliente',
    CONSULTANT: ' asesor',
    EVENT: ' evento',
    CONTACT: ' contacto',
    ATTENDANCE: ' asistencia',
    EMAIL: 'Se envio correo electronico con la contraseña',
    TOACCEPT: 'OK',
  };

  static readonly ALERTERROR = {
    TITLE: '¡Error!',
    TEXTCREATE: 'Se ha producido un error registrando el',
    TEXTUPDATE: 'Se ha producido un error actualizando el ',
    ADVISER: ' asesoria',
    CLIENT: ' cliente',
    CONSULTANT: ' asesor',
    EVENT: ' evento',
    CONTACT: ' contacto',
    ATTENDANCE: ' asistencia',
    EMAIL: 'Se ha producido un error al enviar el correo',
    EMAILEXIST: 'El correo electronico no se encuentra registrado',
    TOACCEPT: 'OK',
  };

  static readonly STETP = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
  };
}
