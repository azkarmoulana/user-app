import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [];
  users$ = new BehaviorSubject<IUser[]>(this.users);

  // set all users
  setAllUsers(payload: any): void {
    if (payload.data) {
      payload.data.forEach((user: any) => {
        this.users.push({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar,
          isFavourite: false,
        });
      });
    }

    this.users$.next(this.users);
  }
}
