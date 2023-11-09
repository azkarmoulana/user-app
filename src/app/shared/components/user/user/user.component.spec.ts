import { UserComponent } from './user.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IUser } from 'src/app/modules/users/models/user';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const user: IUser = {
  id: 3,
  firstName: 'first name',
  lastName: 'last name',
  email: 'test@email.com',
  avatar: 'https://img.com/img',
  isFavourite: false,
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [UserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    component.faStar = faStar;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive user as input', () => {
    expect(component.user).toEqual(user);
  });

  it('should emmit the user id on click', () => {
    const favClickButton = fixture.debugElement.query(
      By.css("[data-testid='fav-button']")
    );
    let userId: number | undefined;

    component.favUserSelect.pipe(first()).subscribe(id => {
      userId = id;
    });

    favClickButton.triggerEventHandler('click');
    expect(userId).toEqual(3);
  });
});
