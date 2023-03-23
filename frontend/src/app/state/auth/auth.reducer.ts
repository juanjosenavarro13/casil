import { createReducer, on } from '@ngrx/store';
import * as actions from './auth.actions';
import { AuthState } from './auth.model';

/** init state */
export const initialState: AuthState = {
  id: undefined,
  username: undefined,
  created_at: undefined,
  updated_at: undefined,
};

/** auth reducer */
export const authReducer = createReducer(
  initialState,
  on(actions.login, (state, props) => {
    return {
      ...state,
      id: props.id,
      username: props.username,
      created_at: props.created_at,
      updated_at: props.updated_at,
    };
  }),
  on(actions.logout, () => {
    return {
      id: undefined,
      name: undefined,
      created_at: undefined,
      updated_at: undefined,
    };
  })
);
