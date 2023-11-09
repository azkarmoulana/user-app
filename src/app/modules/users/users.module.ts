import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { FavouriteUsersComponent } from './components/favourite-users/favourite-users.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserModule } from '@Components';

@NgModule({
  declarations: [UsersComponent, FavouriteUsersComponent, UsersPageComponent],
  imports: [CommonModule, UserModule, UsersRoutingModule],
  exports: [UsersPageComponent],
})
export class UsersModule {}
