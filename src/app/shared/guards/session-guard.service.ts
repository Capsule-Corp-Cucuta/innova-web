import { Injectable } from '@angular/core';
import type {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { UrlConstants } from '../constants/url-constants';
import type { FacadeService } from '../services/facade.service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuardService implements CanActivate {
  private readonly ROUTES = UrlConstants.ROUTES;

  constructor(private service: FacadeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (!this.service.getToken()) {
      this.router.navigate([this.ROUTES.SECURITY]);
      return false;
    }
    return true;
  }
}
