import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/modules/users/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: IUser;
  @Output() favUserSelect = new EventEmitter<number>();

  faStar = faStar;

  onFavouriteClick(userId: number): void {
    this.favUserSelect.emit(userId);
  }
}
