import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { UsersService } from '../../services/users.service';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { IUser } from '../../models/user';
import { UserModule } from '@Components';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UsersService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, UserModule, NoopAnimationsModule],
      declarations: [UsersComponent],
      providers: [UsersService, DataService],
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    dataService = TestBed.inject(DataService);

    jest.spyOn(userService, 'setAllUsers');
    jest.spyOn(dataService, 'getUsers').mockReturnValue(of({ data: [] }));
    jest.spyOn(dataService, 'getNewUser').mockReturnValue(of({ data: {} }));
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users if users are available in userService', () => {
    const mockUsers: IUser[] = [
      {
        id: 1,
        firstName: 'my f name',
        lastName: 'my l name',
        email: 'something@example.com',
        avatar: 'avatar.jpg',
        isFavourite: false,
      },
    ];

    userService.users$.next(mockUsers);
    component.ngOnInit();

    expect(component.users).toEqual(mockUsers);
  });

  it('should call getUsers from dataService if users are not available in userService', () => {
    const mockUsers: IUser[] = [];
    userService.users$.next(mockUsers);
    jest
      .spyOn(dataService, 'getUsers')
      .mockReturnValue(of({ data: mockUsers }));
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(dataService.getUsers).toHaveBeenCalledWith(
        component.initialUserCount
      );
      expect(userService.setAllUsers).toHaveBeenCalledWith({ data: mockUsers });
    });
  });

  it('should call requestNewUser on ngOnInit', () => {
    jest.spyOn(component, 'requestNewUser');
    component.ngOnInit();
    expect(component.requestNewUser).toHaveBeenCalled();
  });

  it('should request a new user on calling requestNewUser', fakeAsync(() => {
    const mockNewUser = {
      id: 1,
      firstName: 'New',
      lastName: 'User',
      email: 'new@example.com',
      avatar: 'new-avatar.jpg',
      isFavourite: false,
    };
    jest
      .spyOn(dataService, 'getNewUser')
      .mockReturnValue(of({ data: mockNewUser }));

    jest.spyOn(userService, 'setUser');

    component.requestNewUser();
    tick(5000);

    expect(dataService.getNewUser).toHaveBeenCalled();
    expect(userService.setUser).toHaveBeenCalledWith({ data: mockNewUser });

    component.ngOnDestroy();
  }));

  it('should call userService.addFavUser on calling onFavUserSelect', () => {
    jest.spyOn(userService, 'addFavUser');
    const favUserId = 1;
    component.onFavUserSelect(favUserId);

    expect(userService.addFavUser).toHaveBeenCalledWith(favUserId);
  });

  it('should unsubscribe from apiReq$ on ngOnDestroy', () => {
    jest.spyOn(component.apiReqSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.apiReqSubscription.unsubscribe).toHaveBeenCalled();
  });
});
