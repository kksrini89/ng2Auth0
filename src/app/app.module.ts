import { Routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from "./services/auth.guard";

@NgModule({
  imports: [BrowserModule,
    Routing],
  declarations: [AppComponent,
    HomeComponent, ProfileComponent],
  bootstrap: [AppComponent],
  providers: [AUTH_PROVIDERS, AuthService, AuthGuard]
})
export class AppModule { }
