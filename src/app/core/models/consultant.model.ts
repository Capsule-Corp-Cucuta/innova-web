import { User } from './user.model';

export class Consultant extends User {
  code: string;
  isActive: boolean;
}
