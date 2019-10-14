import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeApiService } from './fakeApi.service';
import { UserResolverService } from './UserResolver.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FakeApiService, UserResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
