import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsers } from './user.interface';

const getUsersState = createFeatureSelector<IUsers>('users'); //define full model

export const usersSelect = createSelector(getUsersState, (state) => {
  return state.users;
}); //define part of model
