import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';


export const routes:Routes = [
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'register',
    component:RegisterPageComponent
  },
  {
    path: 'regresar',
    component:LoginPageComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'prefix'//Nos redirecciona, cuando se cumpla ese rol, la cual puede ser full->como tal dice la ruta  o es prefix-> lo que hace es que las rutas que tenga por adelante el path en este caso login/peru

    /*
      path: 'hola' //   hola/code/abc
      redirecTo: '/login',
      pathMatch: 'prefix'
     */
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
