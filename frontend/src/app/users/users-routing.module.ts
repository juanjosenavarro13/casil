import { ProfileComponent } from './pages/profile/profile.component';
import { infoConstants } from './../../constants/info.constants';
import { ErrorComponent } from './../pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: infoConstants.title + ' ~ Login',
    canActivate: [AuthGuard],
    data: { auth: true },
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
