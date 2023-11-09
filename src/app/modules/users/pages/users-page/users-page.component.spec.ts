import { UsersPageComponent } from './users-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent = UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UsersPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });
});
