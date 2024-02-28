import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,SharedModule
  ]
})
export class UsersModule { }
