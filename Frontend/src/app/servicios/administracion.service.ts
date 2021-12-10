import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  token:string="";
  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) { 
      this.token = this.servicioSeguridad.ObtenerToken();
    }

  CrearPersona(persona:ModeloPersona):Observable<ModeloPersona>
  {
    return this.http.post("http://localhost:3000/personas",persona,
      {
        headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
      });
  }

  EditarPersona(persona:ModeloPersona):Observable<ModeloPersona>
  {
    return this.http.put(`http://localhost:3000/personas/${persona.id}`,persona,
      {
        headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`})
      });
  }

  EliminarPersona(id:string):Observable<any>{
    return this.http.delete<ModeloPersona>(`http://localhost:3000/personas/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ConsultaPersonaPorId(id:string):Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`http://localhost:3000/personas/${id}`)
  }

  ObtenerRegistrosPersona():Observable<ModeloPersona[]>{
    return this.http.get<ModeloPersona[]>("http://localhost:3000/personas");
  }

}
