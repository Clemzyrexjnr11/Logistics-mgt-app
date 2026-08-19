import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main.component';
// import { authGuard } from '../controllers/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate:[authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'shipments',
        loadChildren:()=> import('./shipments/shipments.module').then((m)=> m.ShipmentsModule)
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
