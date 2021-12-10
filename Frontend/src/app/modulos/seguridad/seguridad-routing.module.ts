import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';

const routes: Routes = [
{
  path:"identificar",
  component:IdentificacionComponent
},
{
  path:"cerrar-sesion",
  component:CerrarSesionComponent
},
{
  path:"cambiar-clave",
  component:CambioClaveComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
