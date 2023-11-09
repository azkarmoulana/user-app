import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteUsersComponent } from './favourite-users.component';

describe('FavouriteUsersComponent', () => {
  let component: FavouriteUsersComponent;
  let fixture: ComponentFixture<FavouriteUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteUsersComponent]
    });
    fixture = TestBed.createComponent(FavouriteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
