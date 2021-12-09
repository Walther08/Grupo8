import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';

const routes: Routes = [
  {
    path:"personas",
    component:BuscarPersonaComponent
  },
  {
    path:"productos",
    component:BuscarProductoComponent
  },
  {
    path:"personas/crear",
    component:CrearPersonaComponent
  },
  {
    path:"personas/buscar",
    component:BuscarPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
