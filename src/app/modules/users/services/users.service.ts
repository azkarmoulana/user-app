import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [];
  private favUsers: IUser[] = [];
  users$ = new BehaviorSubject<IUser[]>(this.users);
  favUsers$ = new BehaviorSubject<IUser[]>(this.favUsers);

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

  // set single user
  setUser(payload: any): void {
    const _user = payload.data;
    if (_user) {
      const newUser = {
        id: _user.id,
        firstName: _user.first_name,
        lastName: _user.last_name,
        email: _user.email,
        avatar: _user.avatar,
        isFavourite: false,
      };

      this.users.pop();
      this.users.unshift(newUser);
    }

    this.users$.next(this.users);
  }

  // add favourite user
  addFavUser(id: number): void {
    this.users.forEach((el, index) => {
      if (el.id === id) {
        if (this.users[index].isFavourite === false) {
          if (this.favUsers.length < 10) {
            this.users[index].isFavourite = true;
            this.favUsers.push(this.users[index]);
          }
        } else {
          this.users[index].isFavourite = false;
          const _favUserIndex = this.favUsers.indexOf(this.users[index]);
          this.favUsers.splice(_favUserIndex, 1);
        }
      }
    });

    this.users$.next(this.users);
    this.favUsers$.next(this.favUsers);
  }
}
