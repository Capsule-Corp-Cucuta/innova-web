import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/core/models/user-login.model';

import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { LabelConstants } from 'src/app/shared/constants/label-constants';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {
  public form: FormGroup;
  public isLogged = false;
  public isLoginFail = false;
  public roles: string[] = [];
  public error = false;
  public user: UserLogin;
  public prueba: string;

  public readonly LABELS = LabelConstants.LABELS.LOGIN;
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LINKS = LabelConstants.LINKS;
  public readonly URIS = UrlConstants.ROUTES;

  constructor(private formBuilder: FormBuilder, private service: FacadeService, private router: Router) {
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
      this.error = false;
      this.user = new UserLogin(this.form.controls['email'].value, this.form.controls['password'].value);

      this.service.signin(this.user).subscribe(
        (response) => {
          this.service.setToken(response.jwt);
          this.service.setAuthorities(response.authorities);
          this.service.setUser(this.form.controls['email'].value);

          this.isLogged = true;
          this.isLoginFail = false;
          this.roles = this.service.getAuthorities();
          //this.router.navigate([this.URIS.PRINCIPAL]);
        },
        (err) => {
          this.isLogged = false;
          this.isLoginFail = true;
          this.error = true;
        }
      );
    } else {
      this.error = true;
      this.prueba = 'Campos invalidos, favor revisar ';
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}

