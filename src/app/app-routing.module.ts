import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeApiService } from './fakeApi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserResolverService } from './UserResolver.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent, resolve: { users: UserResolverService } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
