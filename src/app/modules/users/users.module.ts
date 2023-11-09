import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { FavouriteUsersComponent } from './components/favourite-users/favourite-users.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [UsersComponent, FavouriteUsersComponent, UsersPageComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersPageComponent],
})
export class UsersModule {}
