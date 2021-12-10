import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  ListaProductos:ModeloProducto[]=[];
  TextoDeInputBuscar: string = "";

  constructor(private servicioProducto: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }
  
  ObtenerListadoProductos(){
    this.servicioProducto.ObtenerRegistros().subscribe((datos:ModeloProducto[])=>{
      if(this.TextoDeInputBuscar.trim()==="")
        this.ListaProductos= datos;
      else
        this.ListaProductos= datos.filter(p => p.nombre?.includes(this.TextoDeInputBuscar));
    })
  }
  
  Buscar(){
    this.ObtenerListadoProductos();
  }
}
