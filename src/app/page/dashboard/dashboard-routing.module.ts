import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { DigimonsComponent } from '../digimons/digimons.component';
import { MetabotsComponent } from '../metabots/metabots.component';


//Creamos el propio sistema de ruteo de dashboard
export const routes:Routes=[
  {
    path:'', //Cuando exista el path vacio
    component:DashboardComponent,
    children:[
      {
        path:'pokemons', //Cuando exista el path vacio
        component:PokemonsComponent
      },
      {
        path:'digimons', //Cuando exista el path vacio
        component:DigimonsComponent
      },
      {
        path:'metabots', //Cuando exista el path vacio
        component:MetabotsComponent
      }
    ]
  },

]

@NgModule({
  //Cargar los componentes de cada uno de los menues que conforman el dahsboard
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
