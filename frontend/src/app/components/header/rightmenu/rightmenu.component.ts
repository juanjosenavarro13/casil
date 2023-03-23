import { AppState } from './../../../state/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsAuth from '../../../state/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.scss'],
})
export class RightmenuComponent {
  constructor(private store: Store<AppState>, private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.store.dispatch(actionsAuth.logout());
    this.router.navigate(['/users/login']);
  }
}
