import { JwtModel } from 'src/app/core/models/jwt.model';

export class TestUtils {
  static JWT: JwtModel = {
    jwt: 'Bearer ',
    authorities: ['Admin'],
  };
}
