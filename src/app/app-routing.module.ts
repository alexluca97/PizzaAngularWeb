import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { LoginDevComponent } from './components/login-dev/login-dev.component';
import { RegisterDevComponent } from './components/register-dev/register-dev.component';
import { StatisticDevComponent } from './components/pages/statistic-dev/statistic-dev.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthService] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthService] },
  { path: 'statistic-dev', component: StatisticDevComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'login-dev', component: LoginDevComponent},
  { path: 'register-dev', component: RegisterDevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
