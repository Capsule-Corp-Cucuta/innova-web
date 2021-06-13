import { User } from 'src/app/core/models/user.model';
import { Client } from '../../core/models/client.model';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { Contact } from '../../core/models/contact.model';
import { Consultant } from '../../core/models/consultant.model';
import { ContactType } from 'src/app/core/models/contact.model';
import { Inscription } from 'src/app/core/models/inscription.model';
import { EventState, EventType, InnovaEvent } from '../../core/models/innova-event.model';
import { Advisory, AdvisoryArea, AdvisoryState, AdvisoryType } from '../../core/models/advisory.model';

export class TestUtils {
  static JWT: JwtModel = {
    jwt: 'Bearer ',
    authorities: ['Admin'],
  };

  static user: User = {
    id: '1090494956',
    name: 'Jose Guillermo',
    lastname: 'Parada Corredor',
    email: 'jguillermoparada@gmail.com',
    cellphone: '3102171787',
    address: 'av 9 # 10-45',
  };

  static consultant: Consultant = {
    id: '1090494956',
    name: 'Jose Guillermo',
    lastname: 'Parada Corredor',
    email: 'jguillermoparada@gmail.com',
    cellphone: '3102171787',
    address: 'av 9 # 10-45',
    code: '12345',
    active: true,
  };

  static consultants: Consultant[] = [
    {
      id: '1090494956',
      name: 'Edgar',
      lastname: 'Perez',
      email: 'edgar@gmail.com',
      cellphone: '3102171787',
      address: 'av 9 # 10-45',
      code: '12344',
      active: false,
    },
    {
      id: '1090494956',
      name: 'Jose Guillermo',
      lastname: 'Parada Corredor',
      email: 'jguillermoparada@gmail.com',
      cellphone: '3102171787',
      address: 'av 9 # 10-45',
      code: '12345',
      active: true,
    },
  ];

  static report: any[] = [
    {
      consultant: '1090494956',
      startDate: new Date(),
      closeDate: new Date(),
      hour: 20,
    },
  ];

  static client: Client = {
    id: '1090494957',
    name: 'Edwar ',
    lastname: 'Camargo',
    email: 'edwi@gmail.com',
    cellphone: '3102171788',
    address: 'av 9 # 10-45',
    type: ContactType.ENTREPRENEUR,
    registrationDate: new Date(),
    requestAccompaniment: false,
    companyName: 'Tesoreria ufps',
    nit: '12345678-0',
    consultantId: TestUtils.consultant.id,
  };

  static clients: Client[] = [
    {
      id: '1090494957',
      name: 'Edwar ',
      lastname: 'Camargo',
      email: 'edwi@gmail.com',
      cellphone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.ENTREPRENEUR,
      registrationDate: new Date(),
      requestAccompaniment: false,
      companyName: 'Tesoreria ufps',
      nit: '12345678-0',
      consultantId: TestUtils.consultant.id,
    },
    {
      id: '1090494958',
      name: 'Sergio',
      lastname: 'Rodriguez',
      email: 'edwi@gmail.com',
      cellphone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.COMPANY,
      registrationDate: new Date(),
      requestAccompaniment: false,
      companyName: 'Colpatria',
      nit: '12345678-0',
      consultantId: TestUtils.consultant.id,
    },
  ];

  static contact: Contact = {
    id: '1090494947',
    name: 'Cristian',
    lastname: 'Arevalo',
    email: 'cristian@gmail.com',
    cellphone: '3102171788',
    address: 'av 9 # 10-45',
    type: ContactType.ENTREPRENEUR,
    registrationDate: new Date(),
    requestAccompaniment: false,
  };

  static contacts: Contact[] = [
    {
      id: '1090494947',
      name: 'Cristian',
      lastname: 'Arevalo',
      email: 'cristian@gmail.com',
      cellphone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.ENTREPRENEUR,
      registrationDate: new Date(),
      requestAccompaniment: true,
      active: true,
    },
    {
      id: '1090494958',
      name: 'Saul',
      lastname: 'Mora',
      email: 'saul@gmail.com',
      cellphone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.COMPANY,
      registrationDate: new Date(),
      requestAccompaniment: false,
      companyName: 'Colpatria',
      nit: '12345678-0',
      active: true,
    },
  ];

  static advisory: Advisory = {
    id: 1,
    consultantId: TestUtils.consultant.id,
    clientId: TestUtils.client.id,
    date: new Date(),
    type: AdvisoryType.INITIAL,
    durationInHours: 2,
    preparationTypeInHours: 3,
    area: AdvisoryArea.HUMAN_RESOURCES,
    subject: 'Prueba 1',
    notes:
      'Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa.',
    state: AdvisoryState.REJECTED,
  };

  static advisorys: Advisory[] = [
    {
      id: 1,
      consultantId: TestUtils.consultant.id,
      clientId: TestUtils.client.id,
      date: new Date(),
      type: AdvisoryType.INITIAL,
      durationInHours: 2,
      preparationTypeInHours: 3,
      area: AdvisoryArea.HUMAN_RESOURCES,
      subject: 'Prueba 1',
      notes: 'Pruebas de asesoria 1',
      state: AdvisoryState.REJECTED,
    },
    {
      id: 2,
      consultantId: TestUtils.consultant.id,
      clientId: TestUtils.client.id,
      date: new Date(),
      type: AdvisoryType.FOLLOW_UP,
      durationInHours: 3,
      preparationTypeInHours: 5,
      area: AdvisoryArea.HUMAN_RESOURCES,
      subject: 'Prueba 2',
      notes: 'Pruebas de asesoria 2',
      state: AdvisoryState.PENDING,
    },
  ];

  static event: InnovaEvent = {
    id: 1,
    title: 'Evento de prueba 1',
    startDate: new Date(),
    closeDate: new Date(),
    registrationDeadlineDate: new Date(),
    eventDurationInHours: 3,
    theme: 'Mocks',
    description:
      'Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa.',
    type: EventType.TALK,
    state: EventState.OPEN,
    department: 'NORTE DE SANTANDER',
    city: 'Cucuta',
    place: 'Universidad Francisco de Paula Santander',
    email: 'innova@ufps.edu.co',
    link: 'https://ww2.ufps.edu.co/',
  };

  static events: InnovaEvent[] = [
    {
      id: 1,
      title: 'Evento de prueba 1',
      startDate: new Date(),
      closeDate: new Date(),
      registrationDeadlineDate: new Date(),
      eventDurationInHours: 3,
      theme: 'Mocks',
      description:
        'Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa.',
      type: EventType.TALK,
      state: EventState.OPEN,
      department: 'NORTE DE SANTANDER',
      city: 'Cucuta',
      place: 'Universidad Francisco de Paula Santander',
      email: 'innova@ufps.edu.co',
      link: 'https://ww2.ufps.edu.co/',
    },
    {
      id: 2,
      title: 'Evento de prueba 2',
      startDate: new Date(),
      closeDate: new Date(),
      registrationDeadlineDate: new Date(),
      eventDurationInHours: 10,
      theme: 'Mocks parte 2',
      description:
        'Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa.',
      type: EventType.COURSE,
      state: EventState.OPEN,
      department: 'NORTE DE SANTANDER',
      city: 'Cucuta',
      place: 'Universidad Francisco de Paula Santander',
      email: 'innova@ufps.edu.co',
      link: 'https://ww2.ufps.edu.co/',
    },
  ];

  static inscriptions: Inscription[] = [
    {
      userId: '1090494956',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382491',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
    {
      userId: '1090494951',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382492',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
    {
      userId: '1090494952',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382493',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
    {
      userId: '1090494953',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382494',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
    {
      userId: '1090494954',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382495',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
    {
      userId: '1090494955',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: false,
    },
    {
      userId: '1090382496',
      eventId: 1,
      inscriptionDate: new Date(),
      attended: true,
    },
  ];
}
