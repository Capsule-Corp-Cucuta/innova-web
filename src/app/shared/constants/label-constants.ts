export class LabelConstants {
  public static LABELS = {
    LOGIN: {
      TITLE: 'Inicio de Sesión',
      SUBTITLE: 'Innova UFPS',
      TEXT: 'Ingresa tus datos para iniciar sesión',
      PLACEHOLDER: {
        USER: 'Correo electronico:',
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
        EMAIL: 'Correo electronico:',
      },
      BUTTON: 'Enviar correo de recuperación',
      LINK: 'Volver a Inicio de Sesión',
    },
    CONTACTREGISTER: {
      FORM: {
        TITLE: 'Registrarme como contacto',
        SUBTITLE: 'Innova UFPS',
        CONTACTTYPE: 'Tipo de contacto',
        PLACEHOLDER: {
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CEDULA: 'Cédula:',
          MOBILE: 'Número de Celular:',
          EMAIL: 'Correo electrónico:',
          TYPE: 'Tipo de contacto:',
          EMPRESA: 'Nombre de la empresa:',
          NIT: 'Nit:',
          ADDRESSBUSINESS: 'Direccion de empresa:',
          CITY: 'Ciudad',
          PHONE: 'Telefono fijo:',
          WEBSITE: 'Sitio web',
          APPLYFOR: 'Solicitar acompañamiento profesional',
        },
        TEXT: 'Datos de empresa',
        REGISTER_BUTTON: 'Registrarme',
        LINK: 'Volver a Inicio de Sesión',
      },
    },
    ADVISORY:{
      FORM:{
        TITLE:'Registrar asesor',
        TITLE_UPDATE:'Actualizar asesor',
        SUBTITLE:'Innova UFPS',
        PLACEHOLDER:{
          ID:'Id asesor',
          STATE:'Estado asesor',
          NAME:'Nombres',
          LASTNAME:'Apellidos',
          IDENTIFICATIONCARD:'Nro. de Cedula',
          MOBILE:'Celular',
          EMAIL:'Corre Electronico',
          ADDRESS:'Direccion de residencia'
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        FILTER:'Buscar',
        SEARCH:'Buscar...',
        NOTDATA:'No hay datos',
        EXPORT:'Exportar datos',
        COLUMNS: ['identificatioCard','name','lastName', 'email', 'mobile','state', 'actions'],
        CELLS: {
          USERNAME:'Usuario',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME:'Apellidos',
          EMAIL: 'Correo electrónico:',
          MOBILE: 'Número de Celular:',
          STATE:'Estado'
        },
      },
    },
  };

  public static CONTACTS_TYPES = [
    { id: 0, value: 'Emprendedor' },
    { id: 1, value: 'Empresa' },
  ];


  public static ICONS = {
    EMAIL: 'email',
    VPN_KEY: 'vpn_key',
    PERSON: 'person',
    HOME: 'home',
    SAVE: 'save',
    CREATE: 'create',
    ADD: 'add',
    OFFLINE:'offline_pin',
 };

}
