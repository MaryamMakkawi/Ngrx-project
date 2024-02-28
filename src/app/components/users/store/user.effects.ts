import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { loadUsers, loadUsersSuccess } from './user.action';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this._action$.pipe(
      ofType(loadUsers),
      exhaustMap((action) => {
        return this._userService.getUsers().pipe(
          map((users) => {
            return loadUsersSuccess({ users: users });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
  constructor(private _action$: Actions, private _userService: UserService) {}
}
