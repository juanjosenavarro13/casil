import { Store } from '@ngrx/store';
import { apiConstants } from './../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetInfoModel } from './app.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from './state/app.state';
import * as authActions from './state/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private info: BehaviorSubject<GetInfoModel> =
    new BehaviorSubject<GetInfoModel>({
      usuarios: 0,
      productos: 0,
      socios: 0,
    });

  info$ = this.info.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.getInfo();
    this.validatedUser();
  }

  getInfo(): void {
    this.http.get<GetInfoModel>(apiConstants.info).subscribe({
      next: (resp) => {
        this.info.next(resp);
      },
    });
  }

  validatedUser() {
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.removeItem('user');
      return;
    }
    this.http
      .post<boolean>(apiConstants.validatedUser, JSON.parse(user))
      .subscribe({
        next: (resp: boolean) => {
          if (!resp) {
            this.store.dispatch(authActions.logout());
            localStorage.removeItem('user');
            this.router.navigate(['/users/login']);
          }
        },
      });
  }
}
