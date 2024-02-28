import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/shared/AppState/AppState.interface';
import { IUser } from '../../store/user.interface';
import { Observable } from 'rxjs';
import { usersSelect } from '../../store/user.selector';
import { loadUsers } from '../../store/user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList$!: Observable<IUser[]>;

  constructor(private _store: Store<IAppState>) {}
  ngOnInit(): void {
    this._store.dispatch(loadUsers());
    this.userList$ = this._store.select(usersSelect);
  }
}
