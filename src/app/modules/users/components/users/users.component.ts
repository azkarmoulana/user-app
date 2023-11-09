import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  initialUserCount = 10;
  users: IUser[] = [];

  constructor(
    private userService: UsersService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.userService.users$.subscribe((users: IUser[]) => {
      if (users.length) {
        this.users = users;
      } else {
        this.dataService
          .getUsers(this.initialUserCount)
          .subscribe((data: any) => {
            this.userService.setAllUsers(data);
          });
      }
    });
  }

  onFavUserSelect($event: any) {}
}
