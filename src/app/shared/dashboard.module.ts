import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from './material-angular.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    NavbarComponent,
    SidenavComponent
  ]
})
export class DashboardModule { }
