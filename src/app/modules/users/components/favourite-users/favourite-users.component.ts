import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-favourite-users',
  templateUrl: './favourite-users.component.html',
  styleUrls: ['./favourite-users.component.scss'],
})
export class FavouriteUsersComponent implements OnInit {
  favUsers: IUser[] = [];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.favUsers$.subscribe((users: IUser[]) => {
      this.favUsers = users;
    });
  }

  onFavUserSelect(favUserId: number): void {
    this.userService.addFavUser(favUserId);
  }
}
