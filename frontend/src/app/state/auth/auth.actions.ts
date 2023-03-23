import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.model';

export const login = createAction('[Auth] login', props<AuthState>());

export const logout = createAction('[Auth] logout');
