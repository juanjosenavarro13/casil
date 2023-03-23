import { infoConstants } from './../../../../constants/info.constants';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginModelFB } from './login.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as actionsAuth from '../../../state/auth/auth.actions';
import { Router } from '@angular/router';
import { LoginErrorModel, LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private LoginService: LoginService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  messageError = '';
  info = infoConstants;

  loginForm: loginModelFB = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  submit() {
    if (
      !this.loginForm.invalid &&
      this.loginForm.value.username &&
      this.loginForm.value.password
    ) {
      this.LoginService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).subscribe({
        next: (resp: LoginModel) => {
          if (resp.id) {
            this.store.dispatch(actionsAuth.login(resp));
            localStorage.setItem('user', JSON.stringify(resp));
            this.router.navigate(['/']);
          }
        },
        error: (err: LoginErrorModel) => {
          this.messageError = err.error.message;
        },
      });
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
