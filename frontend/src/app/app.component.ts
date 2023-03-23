import { infoConstants } from './../constants/info.constants';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as actionsAuth from './state/auth/auth.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  login = false;

  constructor(private Title: Title, private store: Store<AppState>) {
    this.Title.setTitle(infoConstants.title);
    this.store.select('auth').subscribe((auth) => {
      this.login = auth.id !== undefined;
    });

    if (localStorage.getItem('user')) {
      this.store.dispatch(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        actionsAuth.login(JSON.parse(localStorage.getItem('user')!))
      );
    }
  }
}
