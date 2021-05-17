import { User } from './user.model';
import { Event } from './event.model';

export class Attendance {
  event: Event;
  user: User;
  attended: boolean;
}
