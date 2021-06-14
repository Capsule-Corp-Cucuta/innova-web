import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User, UserLogin } from 'src/app/core/models/user.model';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../../../shared/styles/_auth.scss'],
})
export class SigninComponent implements OnInit {
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ROUTES = UrlConstants.ROUTES;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.LOGIN;

  public user: UserLogin;
  public form: FormGroup;
  public isLogged = false;
  public isLoading = false;
  public isLoginFail = false;
  public errorMessage: string;
  public roles: string[] = [];

  constructor(private router: Router, private service: FacadeService, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.service.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.service.getAuthorities();
    }
  }

  public onLogin(): void {
    if (this.form.valid) {
      this.user = new UserLogin(
        this.form.controls[SharedConstants.EMAIL].value,
        this.form.controls[SharedConstants.PASSWORD].value,
      );

      this.isLoading = true;
      this.service.signin(this.user).subscribe(
        (response) => {
          this.service.setToken(response.jwt);
          this.service.setAuthorities(response.authorities);

          this.service
            .findByEmail(this.form.controls[SharedConstants.EMAIL].value)
            .pipe(
              finalize(() => {
                this.isLogged = true;
                this.isLoading = false;
                this.isLoginFail = false;
                this.roles = this.service.getAuthorities();
                this.router.navigate(['/']);
              }),
            )
            .subscribe(
              (user: User) => {
                this.service.setUser(user);
                if (!user.active) {
                  this.signInError();
                }
              },
              () => this.signInError(),
            );
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = error && error.status === 401 ? this.LABELS.ERROR : this.LABELS.ERROR_NOT_FOUND;

          this.signInError();
        },
      );
    }
  }

  private signInError(): void {
    this.isLogged = false;
    this.isLoading = false;
    this.isLoginFail = true;
    this.service.signout();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
