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
  };

  public static CONTACTS_TYPES = [
    { id: 0, value: 'Emprendedor' },
    { id: 1, value: 'Empresa' },
  ];
}
