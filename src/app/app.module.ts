
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './shared/material-angular.module';
import { AuthModule } from './shared/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './shared/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    //Importamos el módulo que hemos creado denominado MaterialAngularModule, para poder invocar todos las librerias que vamos a utilizar de Material Angular
    MaterialAngularModule,
    DashboardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
