import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/core/models/user-login.model';
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
  public readonly URIS = UrlConstants.ROUTES;
  public readonly LINKS = UrlConstants.LINKS;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.LOGIN;

  public user: UserLogin;
  public form: FormGroup;
  public isLogged = false;
  public isLoginFail = false;
  public roles: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: FacadeService,
  ) {
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

      this.service.signin(this.user).subscribe(
        (response) => {
          this.service.setToken(response.jwt);
          this.service.setAuthorities(response.authorities);
          this.service.setUser(this.form.controls[SharedConstants.EMAIL].value);
          this.isLogged = true;
          this.isLoginFail = false;
          this.roles = this.service.getAuthorities();
        },
        () => {
          this.isLogged = false;
          this.isLoginFail = true;
        },
      );
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
