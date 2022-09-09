import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';


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
    //Cuando me dirijo a dashboard, lo que hace es que como dahsboard tiene su propio sistema de rutas, lo que va realizar es cargarme el sistema de rutas del dashboard, que para el sistema de rutas va ser vacio, y me va pintar lo que hay dentro del component dashboard
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard-routing.module').then((m)=>m.DashboardRoutingModule)
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
