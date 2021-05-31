export class User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  cellphone: string;
  address?: string;
  active?: boolean;
}

export class UserLogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
