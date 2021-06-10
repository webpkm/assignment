import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AuthenticationActions } from './actions/authentication.actions';
import * as authentication from './reducers/authentication.reducer';

export interface AppState {
  authentication: authentication.State;
}

export const reducers: ActionReducerMap<AppState, AuthenticationActions>  = {
  authentication: authentication.reducer
};

export const selectAuthenticationState = createFeatureSelector<AppState>('authentication');
