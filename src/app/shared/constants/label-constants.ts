export class LabelConstants {
  public static LABELS = {
    LOGIN: {
      TITLE: 'Inicio de Sesión',
      SUBTITLE: 'Innova UFPS',
      TEXT: 'Ingresa tus datos para iniciar sesión',
      PLACEHOLDER: {
        USER: 'Correo electrónico:',
        PASS: 'Contraseña:',
      },
      ERROR: '¡Ups! parece que las credenciales no son correctas.',
      ERROR_NOT_FOUND: '¡Ups! parece que no te encuentras habilitado para iniciar sesión.',
      BUTTON: 'Iniciar Sesión',
      LINK: '¿Has olvidado tu Contraseña?',
      LINK_REGISTER: '¿Aún no tienes cuenta en Innova?',
    },
    FORGOT_PASSWORD: {
      TITLE: '¿Olvidaste tu contraseña?',
      SUBTITLE: 'Innova UFPS',
      TEXT: 'Te enviaremos una nueva contraseña al correo para que puedas iniciar sesión',
      PLACEHOLDER: {
        EMAIL: 'Correo electrónico:',
      },
      BUTTON: 'Enviar correo de recuperación',
      LINK: 'Volver a Inicio de Sesión',
    },
    CONTACT_REGISTER: {
      FORM: {
        TITLE: 'Registrarme como contacto',
        TITLE_UPDATE: 'Actualizar mis datos',
        SUBTITLE: 'Innova UFPS',
        CONTACT_TYPE: 'Tipo de contacto',
        PLACEHOLDER: {
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CEDULA: 'Cédula:',
          MOBILE: 'Número de celular:',
          EMAIL: 'Correo electrónico:',
          ADDRESS: 'Dirección de residencia:',
          TYPE: 'Tipo de contacto:',
          COMPANY_NAME: 'Nombre de la empresa:',
          NIT: 'Nit:',
          ADDRESS_BUSINESS: 'Dirección de empresa:',
          CITY: 'Ciudad:',
          DEPARTMENT: 'Departamento:',
          PHONE: 'Teléfono fijo:',
          WEBSITE: 'Sitio web:',
          APPLY_FOR: 'Solicitar acompañamiento profesional:',
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
        NOT_DATA: 'No hay datos',
        COLUMNS: ['type', 'id', 'name', 'lastname', 'cellphone', 'email', 'companyName', 'nit', 'actions'],
        CELLS: {
          BUSINESS_TYPE: 'Tipo de contacto:',
          IDENTIFICATION_CARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CELLPHONE: 'Celular',
          BUSINESS_NAME: 'Empresa:',
          NIT: 'Nit:',
          EMAIL: 'Correo electrónico:',
          ACTIONS: 'Opciones',
        },
        TOOLTIP: {
          ASSIGN: 'Asignar asesor',
          EXPORT: 'Exportar datos',
        },
        EXPORT_BUTTON: 'Exportar',
      },
      ASSIGN_ADVISOR: {
        TITLE: 'Asignar asesor',
        SUBTITLE: 'Innova UFPS',
        LABEL_ASSIGN: 'Asesores',
        ADVISER: 'Seleccionar asesor',
        ASSIGN_BUTTON: 'Asignar',
        CLOSE: 'Cerrar',
      },
      CHANGE_PASSWORD: {
        TITLE: 'Cambiar contraseña',
        ERROR: 'Contraseñas ingresadas no coinciden',
        OLD_PASS: 'Ingresa contraseña actual',
        NEW_PASS: 'Ingresa contraseña nueva',
        REPEAT_NEW_PASS: 'Confirmar contraseña nueva',
        ASSIGN_BUTTON: 'Enviar datos',
        CLOSE: 'Cerrar',
      },
    },
    PRINCIPAL: {
      TITLE: 'Innova',
      MODULES: {
        ADVISORY: 'Asesorías',
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
          STATE: 'Estado:',
          CODE: 'Código:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          IDENTIFICATION_CARD: 'Cédula:',
          MOBILE: 'Celular:',
          EMAIL: 'Corre electrónico:',
          ADDRESS: 'Dirección de residencia:',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
        BACK_BUTTON: 'Volver',
      },
      LIST: {
        TITLE: 'Listado de asesores',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOT_DATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: ['code', 'id', 'name', 'lastname', 'email', 'cellphone', 'active', 'actions'],
        CELLS: {
          CODE: 'Código:',
          IDENTIFICATION_CARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          EMAIL: 'Correo electrónico:',
          MOBILE: 'Celular:',
          STATE: 'Estado:',
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
        TITLE: 'Información del cliente',
        TITLE_UPDATE: 'Actualizar cliente',
        SUBTITLE: 'Innova UFPS',
        LABEL_CLASSIFICATION: 'Clasificación de clientes',
        LABEL_CONTACT: 'Datos del contacto',
        LABEL_BUSINESS: 'Información de la emrpesa',
        LABEL_END: '¿Por qué medio se enteró del centro de desarrollo empresarial - CDE?',
        PLACEHOLDER: {
          DATE_REGISTER: 'Fecha de registro:',
          CLIENT_TYPE: 'Tipo de cliente:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          POSITION: 'Cargo que ocupa:',
          ANTIQUITY: 'Antigüedad en el cargo:',
          PLACE_OF_BIRTH: 'Lugar de nacimiento:',
          DATE_OF_BIRTH: 'Fecha de nacimiento:',
          IDENTIFICATION_CARD: 'No. de Cédula:',
          EDUCATIONAL_LEVEL: 'Nivel de estudios:',
          ADDRESS_CONTACT: 'Dirección de residencia:',
          CITY: 'Ciudad:',
          DEPARTMENT: 'Departamento:',
          PHONE: 'Teléfono fijo:',
          MOBILE: 'Teléfono celular:',
          EMAIL: 'Correo electrónico:',
          GENDER: 'Género:',
          ETHNIC_GROUP: 'Grupo etnico:',
          DISPLACED: 'Desplazado:',
          DISABLED: 'Discapacitado:',
          BUSINESS_NAME: 'Nombre de la empresa:',
          NIT: 'Nit:',
          LEGAL_REPRESENTATIVE: 'Nombre de representante legal:',
          LEGAL_CONSTITUTION: 'Constitución legal:',
          DATE_CONSTITUTION: 'Fecha de constitución:',
          EMPLOYEES: 'Número de empleados:',
          TC: 'Número de empleados tiempo completo:',
          MT: 'Número de empleados edio tiempo:',
          DIRECT: 'Número de empleados directos:',
          INDIRECT: 'Número de empleados indirectos:',
          ADDRESS_BUSINESS: 'Dirección de la empresa',
          WEBSITE: 'Sitio web',
          TYPE_OF_COMPANY: 'Tipo de empresa',
          ANOTHER_TYPE: 'Otro tipo',
          COMMERCIAL_REGISTER: 'Registro mercantil',
          COMMERCIAL_REGISTER_NUMBER: 'Número de registro mercantil',
          YEAR_RENOVATION: 'Último año de renovación',
          MAIN_CODE_CIIU: 'Código principal CIIU',
          INTERNATIONAL_ACTIVITY: 'Actividad internacional',
          COUNTRIES: 'Países con los cuales comercializa',
          INTERNET_BUSINESS: 'Realiza negocios por internet',
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
        NOT_DATA: 'No hay datos',
        COLUMNS: ['consultantId', 'type', 'id', 'name', 'lastname', 'companyName', 'nit', 'active', 'actions'],
        CELLS: {
          CONSULTANT: 'Asesor asignado:',
          BUSINESS_TYPE: 'Tipo:',
          IDENTIFICATION_CARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          COMPANY: 'Empresa:',
          NIT: 'Nit:',
          STATE: 'Estado:',
        },
        TOOLTIP: {
          ASSIGN: 'Asignar Asesor',
          DEACTIVATE: 'Activar/Inactivar',
          EDIT: 'Actualizar Cliente',
          EXPORT: 'Exportar datos',
        },
        EXPORT_BUTTON: 'Exportar datos',
      },
      ASSIGN_ADVISOR: {
        TITLE: 'Asignar asesor',
        SUBTITLE: 'Innova UFPS',
        LABEL_ASSIGN: 'Asesores',
        ADVISER: 'Seleccionar asesor',
        ASSIGN_BUTTON: 'Asignar',
        CLOSE: 'Cerrar',
      },
    },
    ADVISORY: {
      FORM: {
        TITLE: 'Registrar asesoría',
        TITLE_UPDATE: 'Actualizar asesoría',
        TITLE_VIEW: 'Información de la asesoría',
        SUBTITLE: 'Innova UFPS',
        PLACEHOLDER: {
          ADVISER: 'Asesor:',
          CLIENT: 'Cliente:',
          DATE_ADVISORY: 'Fecha de asesoría:',
          CONSULTANT_TYPE: 'Tipo de asesoría:',
          DURATION: 'Duración (Horas):',
          PREPARATION: 'Tiempo de preparación (Horas):',
          AREA: 'Area:',
          AFFAIR: 'Asunto:',
          NOTES: 'Notas:',
          STATE: 'Estado de la asesoría:',
          HOURS: 'hora(s)',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
        BACK_BUTTON: 'Volver',
        CLOSE: 'Cerrar',
      },
      LIST: {
        TITLE: 'Listado de asesorías',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOT_DATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: ['consultant', 'client', 'date', 'type', 'area', 'subject', 'state', 'actions'],
        CELLS: {
          ADVISER: 'Asesor:',
          CLIENT: 'Cliente:',
          DATE: 'Fecha:',
          TYPE: 'Tipo:',
          AREA: 'Area:',
          AFFAIR: 'Asunto:',
          STATE: 'Estado:',
        },
        TOOLTIP: {
          NEW: 'Nueva asesoría',
          VIEW: 'Ver asesoría',
          EDIT: 'Actualizar asesoría',
          EXPORT: 'Exportar datos',
        },
      },
    },
    EVENT: {
      FORM: {
        TITLE: 'Registrar evento',
        TITLE_UPDATE: 'Actualizar evento',
        TITLE_VIEW: 'Información del evento',
        PLACEHOLDER: {
          TITLE: 'Título:',
          DATE_START: 'Fecha de inicio:',
          DATE_END: 'Fecha de fin:',
          DEADLINE: 'Fecha límite de inscripción:',
          HOUR: 'Hora del evento:',
          DURATION: 'Duración del evento:',
          HOURS: ' hora(s)',
          THEME: 'Tema:',
          EVENT_TYPE: 'Tipo del evento:',
          STATE: 'Estado del evento:',
          DESCRIPTION: 'Descripción:',
          PLACE: 'Lugar:',
          CITY: 'Ciudad:',
          DEPARTMENT: 'Departamento:',
          EMAIL: 'Correo de contacto:',
          WEBSITE: 'Link del evento:',
          GO_TO_WEBSITE: 'Click aquí',
        },
        INSCRIPTION_BUTTON: 'Inscribirse',
        DESIST_BUTTON: 'Desistír',
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
        BACK_BUTTON: 'Volver',
        CLOSE: 'Cerrar',
      },
      LIST: {
        TITLE: 'Listado de eventos',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOT_DATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: ['title', 'startDate', 'closeDate', 'registrationDeadline', 'type', 'state', 'enrolled', 'actions'],
        CELLS: {
          TITLE: 'Título:',
          DATE_START: 'Fecha de inicio:',
          DATE_END: 'Fecha de fin:',
          DEADLINE: 'Fecha máxima de inscripción:',
          EVENT_TYPE: 'Tipo del evento:',
          STATE: 'Estado del evento:',
          ENROLLED: 'Inscrito:',
        },
        TOOLTIP: {
          NEW: 'Nuevo evento',
          VIEW: 'Ver evento',
          EDIT: 'Actualizar evento',
          ATTENDANCE: 'Asistencia',
          EXPORT: 'Exportar datos',
        },
      },
    },
    ATTENDANCE: {
      LIST: {
        TITLE: 'Listado de asistencia a evento: ',
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOT_DATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: ['userId', 'inscriptionDate', 'attended'],
        CELLS: {
          USERID: 'Participante:',
          DATE: 'Fecha de inscripción:',
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
        START_DATE: 'Fecha inicial',
        CLOSE_DATE: 'Fecha final',
        BUTTON: 'Buscar',
        ERROR_CONSULTANT: '* Selecciona un asesor *',
        NOT_DATA: 'No hay datos',
        COLUMNS: ['consultant', 'startDate', 'closeDate', 'hour'],
        CELLS: {
          CONSULTANT: 'Asesor:',
          START_DATE: 'Fecha inicial:',
          CLOSE_DATE: 'Fecha final:',
          HOUR: 'Horas:',
        },
        TOOLTIP: {
          EXPORT: 'Exportar datos',
          SEARCH: 'Buscar',
          CLEAR: 'Limpiar campos',
        },
      },
    },
  };

  public static CONTACTS_TYPES = [
    { id: 1, value: 'EMPRENDEDOR' },
    { id: 0, value: 'EMPRESA' },
  ];

  public static EUCATIONAL_LEVEL = [
    { id: 0, value: 'PRIMARIA' },
    { id: 1, value: 'BACHILLER' },
    { id: 2, value: 'TECNICO' },
    { id: 3, value: 'PROFESIONAL' },
    { id: 4, value: 'POSGRADO' },
    { id: 5, value: 'OTRO' },
  ];

  public static GENDER = [
    { id: 0, value: 'MASCULINO' },
    { id: 1, value: 'FEMENINO' },
    { id: 2, value: 'OTRO' },
  ];

  public static ETHNIC_GROUP = [
    { id: 0, value: 'GITANO' },
    { id: 1, value: 'INDIGENA' },
    { id: 2, value: 'AFRO_COLOMBIANO' },
    { id: 3, value: 'RAIZALES' },
    { id: 4, value: 'OTRO' },
  ];

  public static LEGAL_CONSTITUTION = [
    { id: 0, value: 'SAS' },
    { id: 1, value: 'LIMITADA' },
    { id: 2, value: 'ANONIMO' },
    { id: 3, value: 'PERSONA_LEGAL' },
    { id: 4, value: 'OTRO' },
  ];

  public static COMPANY_TYPE = [
    { id: 0, value: 'INDUSTRIAL' },
    { id: 1, value: 'VENTAS_AL_MAYOR' },
    { id: 2, value: 'VENTAS_AL_DETAL' },
    { id: 3, value: 'SERVICIOS' },
    { id: 4, value: 'AGROINDUSTRIAL' },
  ];

  public static INTERNATIONAL_ACTIVITY = [
    { id: 0, value: 'IMPORTACIONES' },
    { id: 1, value: 'EXPORTACIONES' },
    { id: 2, value: 'AMBAS' },
    { id: 3, value: 'NO_APLICA' },
  ];

  public static CONTACT_MEDIUM = [
    { id: 0, value: 'REFERIDO_DEL_MINISTERIO' },
    { id: 1, value: 'REFERIDO_DE_EMPRESA' },
    { id: 2, value: 'UNIVERSIADA' },
    { id: 3, value: 'MEDIOS_DE_COMUNICAION' },
    { id: 4, value: 'SITIO_WEB' },
    { id: 5, value: 'REDES_SOCIALES' },
    { id: 6, value: 'OTROS' },
  ];

  public static OPTION = [
    { id: true, value: 'YES' },
    { id: false, value: 'NOT' },
  ];

  public static ADVISORY_TYPE = [
    { id: 0, value: 'INICIAL' },
    { id: 1, value: 'SEGUIMIENTO' },
    { id: 2, value: 'DE_CIERRE' },
  ];

  public static ADVISORY_AREA = [
    { id: 0, value: 'PLAN_DE_NEGOCIOS' },
    { id: 1, value: 'RECURSOS_HUMANOS' },
    { id: 2, value: 'ADMINISTRACION_DE_EMPRESAS' },
    { id: 3, value: 'FINANCIAMIENTO' },
  ];

  public static ADVISORY_STATE = [
    { id: 0, value: 'PENDIENTE' },
    { id: 1, value: 'RECHAZADA' },
    { id: 2, value: 'COMPLETADA' },
  ];

  public static EVENT_TYPE = [
    { id: 0, value: 'CHARLA' },
    { id: 1, value: 'FERIA_DE_NEGOCIOS' },
    { id: 2, value: 'CURSO' },
    { id: 3, value: 'CURSO_EN_LINEA' },
    { id: 4, value: 'CONFERENCIA_DE_NEGOCIOS' },
    { id: 5, value: 'TELECONFERENCIA' },
    { id: 6, value: 'SEMINARIO' },
    { id: 7, value: 'WEBINAR' },
  ];

  public static EVENT_STATE = [
    { id: 0, value: 'ABIERTO' },
    { id: 1, value: 'CERRADO' },
    { id: 2, value: 'COMPLETADO' },
    { id: 3, value: 'CANCELADO' },
    { id: 4, value: 'POSPUESTO' },
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
    ADD_CONSULTANT: 'person_add_alt',
    SEARCH: 'search',
    ASSIGNED: 'assignment_turned_in',
    CLEAR: 'clear_all',
  };
}
