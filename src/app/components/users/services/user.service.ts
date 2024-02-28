import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../store/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUsers> {
    return this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users');
  }
}
