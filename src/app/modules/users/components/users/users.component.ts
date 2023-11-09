import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { getRandomUserId } from '@Utils';
import { IUser } from '../../models/user';
import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';
import { fadeIn, fadeOut } from '@Animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class UsersComponent implements OnInit, OnDestroy {
  initialUserCount = 10;
  users: IUser[] = [];
  apiReq$ = interval(5000);
  apiReqSubscription: Subscription = new Subscription();

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

    this.requestNewUser();
  }

  requestNewUser(): void {
    this.apiReqSubscription = this.apiReq$.subscribe(e => {
      // Generating a random userId between 1 - 12
      const newUserId = getRandomUserId(1, 12);
      this.dataService.getNewUser(newUserId).subscribe((data: any) => {
        this.userService.setUser(data);
      });
    });
  }

  onFavUserSelect(favUserId: number): void {
    this.userService.addFavUser(favUserId);
  }

  ngOnDestroy() {
    this.apiReqSubscription.unsubscribe();
  }
}
