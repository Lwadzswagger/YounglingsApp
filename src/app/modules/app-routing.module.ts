import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { NavBarComponent } from '../components/home-nav-bar/nav-bar.component';
import { QuestionairComponent } from '../components/questionair/questionair.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: NavBarComponent,
    children: [
      {
        path: '',
        redirectTo: 'challenges',
        pathMatch: 'full'
      }, {
        path: 'challenges',
        component: QuestionairComponent,
      },
       {
        path: 'dashboard',
        component: DashboardComponent,
      },
       {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
