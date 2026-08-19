import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './modules/main/home/home.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren:()=> import('./modules/main/home/home.module').then((m)=> m.HomeModule),
    },
  {
    path:'app',
    loadChildren:()=> import('./modules/main/main.module').then((m)=> m.MainModule),
  },
  {
    path:'auth',
    loadChildren:()=> import('./modules/authentication/authentication.module').then((m)=> m.AuthenticationModule)
  },
  {
    path:'**',
    pathMatch:'full',
    component:ErrorComponent,
    data:{title:'Error'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
