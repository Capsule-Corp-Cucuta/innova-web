import { ContactState, ContactType } from 'src/app/core/models/contact.model';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { Client } from '../../core/models/client.model';
import { Consultant } from '../../core/models/consultant.model';
import { Contact } from '../../core/models/contact.model';

export class TestUtils {
  static JWT: JwtModel = {
    jwt: 'Bearer ',
    authorities: ['Admin'],
  };

  static consultant: Consultant = {
    id: '1090494956',
    name: 'Jose Guillermo',
    lastName: 'Parada Corredor',
    email: 'jguillermoparada@gmail.com',
    cellPhone: '3102171787',
    address: 'av 9 # 10-45',
    code: '12345',
    isActive: true,
  };

  static client: Client = {
    id: '1090494957',
    name: 'Edwar ',
    lastName: 'Camargo',
    email: 'edwi@gmail.com',
    cellPhone: '3102171788',
    address: 'av 9 # 10-45',
    type: ContactType.ENTREPRENEUR,
    registrationDate: new Date(),
    state: ContactState.ENABLED,
    companyName: 'Tesoreria ufps',
    nit: '12345678-0',
    consultant: TestUtils.consultant,
  };

  static clients: Client[] = [
    {
      id: '1090494957',
      name: 'Edwar ',
      lastName: 'Camargo',
      email: 'edwi@gmail.com',
      cellPhone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.ENTREPRENEUR,
      registrationDate: new Date(),
      state: ContactState.ENABLED,
      companyName: 'Tesoreria ufps',
      nit: '12345678-0',
      consultant: TestUtils.consultant,
    },
    {
      id: '1090494958',
      name: 'Sergio',
      lastName: 'Rodriguez',
      email: 'edwi@gmail.com',
      cellPhone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.COMPANY,
      registrationDate: new Date(),
      state: ContactState.ENABLED,
      companyName: 'Colpatria',
      nit: '12345678-0',
      consultant: TestUtils.consultant,
    },
  ];

  static contacts: Contact[] = [
    {
      id: '1090494947',
      name: 'Cristian',
      lastName: 'Arevalo',
      email: 'cristian@gmail.com',
      cellPhone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.ENTREPRENEUR,
      registrationDate: new Date(),
      state: ContactState.PENDING_ADVISOR,
    },
    {
      id: '1090494958',
      name: 'Saul',
      lastName: 'Mora',
      email: 'saul@gmail.com',
      cellPhone: '3102171788',
      address: 'av 9 # 10-45',
      type: ContactType.COMPANY,
      registrationDate: new Date(),
      state: ContactState.NO_ADVISORY,
      companyName: 'Colpatria',
      nit: '12345678-0',
    },
  ];
}
