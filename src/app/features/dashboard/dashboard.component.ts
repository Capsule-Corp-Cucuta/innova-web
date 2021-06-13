import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { UrlConstants } from '../../shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from '../../shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly LABELS = LabelConstants.LABELS.PRINCIPAL;
  public readonly ROLES = SharedConstants.ROLES;

  public id: string;
  public userName: string;
  public authority: string;
  public isHandset$: Observable<boolean>;

  constructor(private router: Router, private service: FacadeService, private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  }

  ngOnInit(): void {
    this.id = this.service.getUser().id;
    this.userName = this.service.getUser().name + ' ' + this.service.getUser().lastname;
    this.authority = this.service.getAuthorities()[0];
    this.redirection();
  }

  public signout(): void {
    this.service.signout();
    this.router.navigate([this.ROUTES.SECURITY]);
  }

  private redirection(): void {
    switch (this.authority) {
      case this.ROLES.ADMIN:
        this.router.navigateByUrl(this.ROUTES.CONSULTANT);
        break;
      case this.ROLES.CLIENT:
        this.router.navigateByUrl(this.ROUTES.ADVISORY);
        break;
      case this.ROLES.CONSULTANT:
        this.router.navigateByUrl(this.ROUTES.CLIENT);
        break;
      case this.ROLES.CONTACT:
        this.router.navigateByUrl(this.ROUTES.EVENT);
        break;
    }
  }
}
