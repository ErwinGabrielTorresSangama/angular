import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from './material-angular.module';
import { LoginPageComponent } from '../page/login-page/login-page.component';
import { RegisterPageComponent } from '../page/register-page/register-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    RouterModule

  ],
  //Exportamos para poder utilizarlos en el app-module.ts
  exports:[
    LoginPageComponent,
    RegisterPageComponent
  ]
})
export class AuthModule { }
