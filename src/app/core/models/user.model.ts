export class User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  cellPhone: string;
  address?: string;
}

export class UserLogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
