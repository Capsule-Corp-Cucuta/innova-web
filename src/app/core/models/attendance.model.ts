import { User } from './user.model';
import { Event } from './event.model';

export class Inscription {
  eventId: string;
  userId: string;
  inscriptionDate: Date;
  attended: boolean;
}
