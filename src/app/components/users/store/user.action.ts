import { createAction, props } from '@ngrx/store';
import { IUser, IUsers } from './user.interface';

export const loadUsers = createAction('[User] Load');
export const loadUsersSuccess = createAction(
  '[User] Load Success',
  props<{ users: IUsers }>()
);
export const addUser = createAction(
  '[User] Add',
  props<{ userAdded: IUser }>()
);
export const updateUser = createAction(
  '[User] Update',
  props<{ userUpdated: IUser }>()
);
export const deleteUser = createAction(
  '[User] delete',
  props<{ userDeleted: IUser }>()
);
