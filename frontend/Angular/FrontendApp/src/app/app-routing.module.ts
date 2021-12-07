import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './templates/header/header.component';

const routes: Routes = [
    {
      path:"Inicio",
      component: HeaderComponent,
    },
    {
      path:"",
      pathMatch:"full",
      redirectTo:"/Inicio"
    },
    {
      path:"administracion",
      loadChildren: ()=>import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
