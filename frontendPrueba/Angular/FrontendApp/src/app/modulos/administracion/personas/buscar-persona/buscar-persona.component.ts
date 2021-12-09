import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  ListaPersonas:ModeloPersona[] = [];

  constructor(private servicioAdministracion:AdministracionService) { }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
  }

  ObtenerListadoPersonas(){
    this.servicioAdministracion.ObtenerRegistrosPersona().subscribe((datos:ModeloPersona[])=>{
      this.ListaPersonas = datos;
    })
  }

}
