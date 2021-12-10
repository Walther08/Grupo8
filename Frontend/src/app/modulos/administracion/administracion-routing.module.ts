import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { AsignarPedidoComponent } from '../pedidos/asignar-pedido/asignar-pedido.component';

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
  },
  {
<<<<<<< HEAD
    path:"personas/editar-persona",
=======
    path:"personas/editar/:id",
>>>>>>> d0e50d10c53a519768e61f40c88443177c228c71
    component: EditarPersonaComponent
  },
  {
    path:"personas/eliminar/:id",
    component: EliminarPersonaComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent
  },
  {
    path:"editar-producto/:id",
    component: EditarProductoComponent
  }, 
  {
    path:"crear-producto",
    component: CrearProductoComponent
  },
  {
    path:"eliminar-producto/:id",
    component: EliminarProductoComponent
  },
  {
    path:"pedidos",
    component: AsignarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }