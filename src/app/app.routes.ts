import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  // landing: redirect to login page
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  // fallback to login
  { path: '**', redirectTo: 'login' }
];
