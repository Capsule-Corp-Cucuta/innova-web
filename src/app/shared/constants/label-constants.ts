export class LabelConstants {
  public static LABELS = {
    LOGIN: {
      TITLE: 'Inicio de Sesión',
      SUBTITLE: 'Innova UFPS',
      TEXT: 'Ingresa tus datos para iniciar sesión',
      PLACEHOLDER: {
        USER: 'Correo electrònico:',
        PASS: 'Contraseña:',
      },
      ERROR: '¡Ups! parece que las credenciales no son correctas.',
      BUTTON: 'Iniciar Sesión',
      LINK: '¿Has olvidado tu Contraseña?',
      LINKREGISTER: '¿Aún no tienes cuenta en Innova?',
    },
    FORGOT_PASSWORD: {
      TITLE: '¿Olvidaste tu contraseña?',
      TEXT:
        'Te enviaremos una nueva al correo para que puedas cambiar la contraseña',
      PLACEHOLDER: {
        EMAIL: 'Correo electrònico:',
      },
      BUTTON: 'Enviar correo de recuperación',
      LINK: 'Volver a Inicio de Sesión',
    },
    CONTACTREGISTER: {
      FORM: {
        TITLE: 'Registrarme como contacto',
        TITLE_UPDATE: 'Actualizar mis datos',
        SUBTITLE: 'Innova UFPS',
        CONTACTTYPE: 'Tipo de contacto',
        PLACEHOLDER: {
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CEDULA: 'Cédula:',
          MOBILE: 'Número de Celular:',
          EMAIL: 'Correo electrónico:',
          ADDRESS: 'Direccion de residencia:',
          TYPE: 'Tipo de contacto:',
          EMPRESA: 'Nombre de la empresa:',
          NIT: 'Nit:',
          ADDRESSBUSINESS: 'Direccion de empresa:',
          CITY: 'Ciudad',
          DEPARTMENT: 'Departamento',
          PHONE: 'Telefono fijo:',
          WEBSITE: 'Sitio web',
          APPLYFOR: 'Solicitar acompañamiento profesional',
        },
        TEXT: 'Datos de empresa',
        REGISTER_BUTTON: 'Registrarme',
        UPDATE_BUTTON: 'Actualizar Datos',
        CHANGE_BUTTON: 'Cambiar contraseña',
        LINK: 'Volver a Inicio de Sesión',
      },
      LIST: {
        TITLE: 'Listado de contactos',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        COLUMNS: [
          'active',
          'type',
          'id',
          'name',
          'lastname',
          'cellphone',
          'companyName',
          'nit',
          'actions',
        ],
        CELLS: {
          BUSINESSTYPE: 'Tipo de contacto',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CELLPHONE: 'Celular',
          BUSINESSNAME: 'Empresa:',
          NIT: 'Nit:',
          STATE: 'Estado',
          ACTIONS: 'Opciones',
        },
        TOOLTIP: {
          ASSIGN: 'Asignar asesor',
          EXPORT: 'Exportar datos',
        },
        EXPORT_BUTTON: 'Exportar',
      },
      ASSIGNADVISOR: {
        TITLE: 'Asignar asesor',
        SUBTITLE: 'Innova UFPS',
        LABELASSIGN: 'Asesores',
        ADVISER: 'Seleccionar asesor',
        ASSIGN_BUTTON: 'Asignar',
      },
      CHANGEPASSWORD: {
        TITLE: 'Cambiar contraseña',
        ERROR: 'Contraseñas ingresadas no coinciden',
        OLDPASS: 'Ingresa contraseña actual',
        NEWPASS: 'Ingresa contraseña nueva',
        REPEATNEWPASS: 'Confirmar contraseña nueva',
        ASSIGN_BUTTON: 'Enviar datos',
      },
    },
    PRINCIPAL: {
      TITLE: 'Innova',
      MODULES: {
        ADVISORY: 'Asesorias',
        ATTENDANCE: 'Asistencias',
        CLIENT: 'Clientes',
        CONSULTANT: 'Asesores',
        EVENT: 'Eventos',
        CONTACT: 'Contactos',
        REPORT: 'Reportes',
        ASSIGNED: 'Asesor asignado',
      },
      MENU: {
        PROFILE: 'Perfil',
        CHANGE_PASS: 'Cambiar clave',
        LOGOUT: 'Salir',
      },
    },
    CONSULTANT: {
      FORM: {
        TITLE: 'Registrar asesor',
        TITLE_UPDATE: 'Actualizar asesor',
        TITLE_VIEW: 'Asesor asignado',
        SUBTITLE: 'Innova UFPS',
        PLACEHOLDER: {
          ID: 'Id asesor',
          STATE: 'Estado asesor',
          CODE: 'Código',
          NAME: 'Nombres',
          LASTNAME: 'Apellidos',
          IDENTIFICATIONCARD: 'Nro. de Cedula',
          MOBILE: 'Celular',
          EMAIL: 'Corre electrònico',
          ADDRESS: 'Direccion de residencia',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        TITLE: 'Listado de asesores',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'id',
          'name',
          'lastname',
          'email',
          'cellphone',
          'active',
          'actions',
        ],
        CELLS: {
          USERNAME: 'Usuario',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos',
          EMAIL: 'Correo electrónico:',
          MOBILE: 'Número de Celular:',
          STATE: 'Estado',
        },
        TOOLTIP: {
          OPTION: 'Activar/Inactivar',
          EDIT: 'Actualizar Asesor',
          NEW: 'Nuevo Asesor',
          EXPORT: 'Exportar datos',
        },
      },
    },
    CLIENT: {
      FORM: {
        TITLE: 'Informacion cliente',
        TITLE_UPDATE: 'Actualizar cliente',
        SUBTITLE: 'Innova UFPS',
        LABELCLASSIFICATION: 'Clasificacion de clientes',
        LABELCONTACT: 'Datos del contacto',
        LABELBUSINESS: 'Informacion de la emrpesa',
        LABELEND:
          '¿Porque medio se entero del centro de desarrollo empresarial - CDE?',
        PLACEHOLDER: {
          ID: 'Id cliente',
          DATEREGISTER: 'Fecha de registro',
          CLIENTTYPE: 'Tipo de cliente',
          NAME: 'Nombres',
          LASTNAME: 'Apellidos',
          POSITION: 'Cargo que ocupa',
          ANTIQUITY: 'Antiguedad en el cargo',
          PLACEOFBIRTH: 'Lugar de nacimiento',
          DATEOFBIRTH: 'Fecha de nacimiento',
          IDENTIFICATIONCARD: 'Nro. de Cedula',
          EDUCATIONALLEVEL: 'Nivel de estudios',
          ADDRESSCONTACT: 'Direccion de residencia',
          CITY: 'City',
          DEPARTMENT: 'Departamento',
          PHONE: 'Telefono fijo',
          MOBILE: 'Telefino celular',
          EMAIL: 'Correo electrònico',
          GENDER: 'Genero',
          ETHNICGROUP: 'Grupo etnico',
          DISPLACED: 'Desplazado',
          DISABLED: 'Discapacitado',
          BUSINESSNAME: 'Nombre de la empresa',
          NIT: 'Nit',
          LEGALREPRESENTATIVE: 'Nombre de representante legal',
          LEGALCONSTITUTION: 'Constitucion legal',
          DATECONSTITUTION: 'Fecha de constitucion',
          EMPLOYEES: 'Numero de empleados',
          TC: 'T.C',
          MT: 'M.T',
          DIRECT: 'Directos',
          INDIRECT: 'Indirectos',
          ADDRESSBUSINESS: 'Direccion de la empresa',
          WEBSITE: 'Sitio web',
          TYPEOFCOMPANY: 'Tipo de empresa',
          ANOTHERTYPE: 'Otro tipo',
          COMMERCIALREGISTER: 'Registro mercantil',
          COMMERCIALREGISTERNUMBER: 'Numero de registro mercantil',
          YEARRENOVATION: 'Ultimo año de renovacion',
          MAINCODECIIU: 'Codigo principal CIIU',
          INTERNATIONALACTIVITY: 'Actividad internacional',
          COUNTRIES: 'Paises con los cuales comercializa',
          INTERNETBUSINESS: 'Realiza negocios por internet',
          SERVICES: 'Productos/Servicios que ofrece la empresa',
          MEANS: 'Medio',
          OBSERVATIONS: 'Observaciones',
        },
        BACK_BUTTON: 'Volver',
        UPDATE_BUTTON: 'Actualizar',
        STEP: {
          PREVIOUS: 'Anterior',
          NEXT: 'Siguiente',
        },
      },
      LIST: {
        TITLE: 'Listado de clientes',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        COLUMNS: [
          'type',
          'id',
          'name',
          'lastname',
          'companyName',
          'nit',
          'active',
          'actions',
        ],
        CELLS: {
          BUSINESSTYPE: 'Tipo de cliente',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          BUSINESSNAME: 'Empresa:',
          NIT: 'Nit:',
          STATE: 'Estado',
        },
        TOOLTIP: {
          ASSIGN: 'Asignar Asesor',
          DEACTIVATE: 'Inactivar Cliente',
          EDIT: 'Actualizar Cliente',
          EXPORT: 'Exportar datos',
        },
        EXPORT_BUTTON: 'Exportar datos',
      },
      ASSIGNADVISOR: {
        TITLE: 'Asignar asesor',
        SUBTITLE: 'Innova UFPS',
        LABELASSIGN: 'Asesores',
        ADVISER: 'Seleccionar asesor',
        ASSIGN_BUTTON: 'Asignar',
      },
    },
    ADVISORY: {
      FORM: {
        TITLE: 'Registrar asesoria',
        TITLE_UPDATE: 'Actualizar asesoria',
        TITLE_VIEW: 'Informacion asesoria',
        SUBTITLE: 'Innova UFPS',
        PLACEHOLDER: {
          ADVISER: 'Asesor: ',
          CLIENT: 'Cliente: ',
          DATEADVISORY: 'Fecha Asesoria: ',
          CONSULTATNTYPE: 'Tipo de asesoria: ',
          DURATION: 'Duracion(Horas): ',
          PREPARATION: 'Tiempo de preparacion: ',
          AREA: 'Area: ',
          AFFAIR: 'Asunto: ',
          NOTES: 'Notas: ',
          STATE: 'Estado: ',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        TITLE: 'Listado de asesorias',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'consultant',
          'client',
          'date',
          'type',
          'area',
          'subject',
          'state',
          'actions',
        ],
        CELLS: {
          ADVISER: 'Asesor',
          CLIENT: 'Cliente',
          DATE: 'Fecha asesoria:',
          TYPE: 'Tipo de asesoria:',
          AREA: 'Area',
          AFFAIR: 'Asunto:',
          STATE: 'Estado',
        },
        TOOLTIP: {
          NEW: 'Nueva asesoria',
          VIEW: 'Ver asesoria',
          EDIT: 'Actualizar asesoria',
          EXPORT: 'Exportar datos',
        },
      },
    },
    EVENT: {
      FORM: {
        TITLE: 'Registrar evento',
        TITLE_UPDATE: 'Actualizar evento',
        TITLE_VIEW: 'Informacion del evento',
        PLACEHOLDER: {
          ID: 'Id: ',
          TITLE: 'Titulo: ',
          DATESTART: 'Fecha inicio: ',
          DATEEND: 'Fecha fin: ',
          DEADLINE: 'Fecha limite de inscripcion: ',
          HOUR: 'Hora del evento: ',
          DURATION: 'Duracion del evento: ',
          HOURS: ' hora(s)',
          THEME: 'Tema: ',
          EVENTTYPE: 'Tipo de evento: ',
          STATE: 'Estado: ',
          DESCRIPTION: 'Descripcion: ',
          PLACE: 'Lugar: ',
          CITY: 'Ciudad: ',
          DEPARTMENT: 'Departamento: ',
          EMAIL: 'Email de contacto: ',
          WEBSITE: 'Link del evento: ',
        },
        INSCRIPTION_BUTTON: 'Inscribirse',
        DESIST_BUTTON: 'Desistir',
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        TITLE: 'Listado de eventos',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'id',
          'title',
          'startDate',
          'closeDate',
          'registrationDeadline',
          'type',
          'state',
          'actions',
        ],
        CELLS: {
          EVENTID: 'Id',
          TITLE: 'Titulo',
          DATESTART: 'Fecha inicio',
          DATEEND: 'Fecha fin:',
          DEADLINE: 'Fecha maxima de inscripcion:',
          EVENTTYPE: 'Tipo de evento',
          STATE: 'Estado',
        },
        TOOLTIP: {
          NEW: 'Nuevo evento',
          VIEW: 'Ver evento',
          EDIT: 'Actualizar evento',
          ATTENDANCE: 'Asistencia',
        },
      },
    },
    ATTENDANCE: {
      LIST: {
        TITLE: 'Listado de asistencia a evento: ',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: ['userId', 'inscriptionDate', 'attended'],
        CELLS: {
          USERID: 'Participante',
          DATE: 'Fecha de inscripcion',
          ATTENDED: 'Asistencia:',
        },
        TOOLTIP: {
          EXPORT: 'Exportar datos',
          SAVE: 'Guardar asistencia',
        },
      },
    },
    REPORT: {
      LIST: {
        TITLE: 'Reporte de horas ',
        CONSULTANT: 'Asesor',
        STARTDATE: 'Fecha inicial',
        CLOSEDATE: 'Fecha final',
        BUTTON: 'Buscar',
        ERRORCONSULTANT: '* Selecciona un asesor *',
        NOTDATA: 'No hay datos',
        COLUMNS: ['consultant', 'startDate', 'closeDate', 'hour'],
        CELLS: {
          CONSULTANT: 'Asesor',
          STARTDATE: 'Fecha inicial',
          CLOSEDATE: 'Fecha final',
          HOUR: 'Horas',
        },
      },
    },
  };

  public static CONTACTS_TYPES = [
    { id: 1, value: 'ENTREPRENEUR' },
    { id: 0, value: 'COMPANY' },
  ];

  public static EUCATIONAL_LEVEL = [
    { id: 0, value: 'PRIMARY' },
    { id: 1, value: 'BACHELOR' },
    { id: 2, value: 'TECHNICAL' },
    { id: 3, value: 'PROFESSIONAL' },
    { id: 4, value: 'POSTGRADUATE' },
    { id: 5, value: 'OTHERS' },
  ];

  public static GENDER = [
    { id: 0, value: 'MALE' },
    { id: 1, value: 'FEMALE' },
    { id: 2, value: 'OTHER' },
  ];

  public static ETHNICGROUP = [
    { id: 0, value: 'GYPSY' },
    { id: 1, value: 'INDIGENOUS' },
    { id: 2, value: 'AFRO_COLOMBIAN' },
    { id: 3, value: 'RAIZALES' },
    { id: 4, value: 'OTHER' },
  ];

  public static LEGALCONSTITUTION = [
    { id: 0, value: 'SAS' },
    { id: 1, value: 'LIMITED' },
    { id: 2, value: 'ANONYMOUS' },
    { id: 3, value: 'LEGAL_PERSON' },
    { id: 4, value: 'OTHER' },
  ];

  public static COMPANYTYPE = [
    { id: 0, value: 'INDUSTRIAL' },
    { id: 1, value: 'WHOLESALE' },
    { id: 2, value: 'RETAIL' },
    { id: 3, value: 'SERVICES' },
    { id: 4, value: 'AGROINDUSTRIAL' },
  ];

  public static INTERNATIONALACTIVITY = [
    { id: 0, value: 'IMPORT' },
    { id: 1, value: 'EXPORT' },
    { id: 2, value: 'BOTH' },
    { id: 3, value: 'DOES_NO_APPLY' },
  ];

  public static CONTACTMEDIUM = [
    { id: 0, value: 'MINISTRY_REFERRAL' },
    { id: 1, value: 'BUSINESS_REFERRAL' },
    { id: 2, value: 'UNIVERSITY' },
    { id: 3, value: 'MASS_MEDIA' },
    { id: 4, value: 'WEBSITE' },
    { id: 5, value: 'SOCIAL_MEDIA' },
    { id: 6, value: 'OTHERS' },
  ];

  public static OPTION = [
    { id: true, value: 'YES' },
    { id: false, value: 'NOT' },
  ];

  public static ADVISORYTYPE = [
    { id: 0, value: 'INITIAL' },
    { id: 1, value: 'FOLLOW_UP' },
    { id: 2, value: 'UCLOSING' },
  ];

  public static ADVISORYAREA = [
    { id: 0, value: 'BUSINESS_PLAN' },
    { id: 1, value: 'HUMAN_RESOURCES' },
    { id: 2, value: 'BUSINESS_ADMINISTRATION' },
    { id: 3, value: 'FINANCING' },
  ];

  public static ADVISORYSTATE = [
    { id: 0, value: 'PENDING' },
    { id: 1, value: 'REJECTED' },
    { id: 2, value: 'COMPLETE' },
  ];

  public static EVENTTYPE = [
    { id: 0, value: 'TALK' },
    { id: 1, value: 'BUSINESS_FAIR' },
    { id: 2, value: 'COURSE' },
    { id: 3, value: 'FONLINE_COURSE' },
    { id: 4, value: 'BUSINESS_CONFERENCE' },
    { id: 5, value: 'TELECONFERENCE' },
    { id: 6, value: 'SEMINAR' },
    { id: 7, value: 'WEBINAR' },
  ];

  public static EVENTSTATE = [
    { id: 0, value: 'OPEN' },
    { id: 1, value: 'CLOSED' },
    { id: 2, value: 'COMPLETE' },
    { id: 3, value: 'CANCELED' },
    { id: 4, value: 'POSTPONED' },
  ];

  public static ICONS = {
    EMAIL: 'email',
    VPN_KEY: 'vpn_key',
    PERSON: 'person',
    PERSON2: 'account_circle',
    HOME: 'home',
    SAVE: 'save',
    CREATE: 'create',
    ADD: 'add',
    OFFLINE: 'block',
    VIEW: 'pageview',
    EDIT: 'edit',
    BOOK: 'book_online',
    CHECK: 'fact_check',
    EVENT: 'event',
    REPORT: 'equalizer',
    LOGOUT: 'power_settings_new',
    CLIENT: 'groups',
    CONSULTANT: 'manage_accounts',
    CONTACT: 'contact_page',
    EXPORT: 'get_app',
    ADDCONSULTANT: 'person_add_alt',
    SEARCH: 'search',
  };
}
