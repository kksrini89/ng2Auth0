import { AuthGuard } from './services/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);