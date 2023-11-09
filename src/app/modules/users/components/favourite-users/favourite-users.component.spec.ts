import { FavouriteUsersComponent } from './favourite-users.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IUser } from '../../models/user';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../../services/users.service';

export const mockFavUsers: IUser[] = [
  {
    id: 1,
    firstName: 'first name',
    lastName: 'last name',
    email: 'test@email.com',
    avatar: 'img.png',
    isFavourite: false,
  },
  {
    id: 2,
    firstName: 'first name',
    lastName: 'last name',
    email: 'test@email.com',
    avatar: 'img.png',
    isFavourite: false,
  },
];

describe('FavouriteUsersComponent', () => {
  let component: FavouriteUsersComponent;
  let fixture: ComponentFixture<FavouriteUsersComponent>;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [FavouriteUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteUsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    component.favUsers = mockFavUsers;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favUsers on ngOnInit', () => {
    userService.favUsers$.next(mockFavUsers);
    component.ngOnInit();

    expect(component.favUsers).toEqual(mockFavUsers);
  });

  it('should call userService.addFavUser on calling onFavUserSelect', () => {
    jest.spyOn(userService, 'addFavUser');
    const favUserId = 1;
    component.onFavUserSelect(favUserId);

    expect(userService.addFavUser).toHaveBeenCalledWith(favUserId);
  });
});
