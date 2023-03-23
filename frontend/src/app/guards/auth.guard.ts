import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select((appState) => appState.auth)
      .pipe(
        map((authUser) => {
          // no logado entra al login
          if (authUser.id === undefined && route.data['auth'] === true) {
            return true;
          }

          // no logado entra a cualquier otra ruta
          if (authUser.id === undefined && route.data['auth'] !== true) {
            this.router.navigate(['users/login']);
            return false;
          }

          // logado entra al login
          if (authUser.id !== undefined && route.data['auth'] === true) {
            this.router.navigate(['/']);
            return false;
          }

          // logado entra a cualquier otra ruta
          return true;
        })
      );
  }
}
