import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';

/** app state interface */
export interface AppState {
  auth: AuthState;
}

/** app state */
export const appState: ActionReducerMap<AppState> = {
  auth: authReducer,
};
