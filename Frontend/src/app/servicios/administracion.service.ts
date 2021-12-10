import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient) { }

  CrearPersona(persona:ModeloPersona):Observable<ModeloPersona>
  {
    return this.http.post("http://localhost:3000/personas",persona,
      {
        headers: new HttpHeaders({})
      });
  }

  EditarPersona(persona:ModeloPersona):Observable<ModeloPersona>
  {
    return this.http.post("http://localhost:3000/personas",persona,
      {
        headers: new HttpHeaders({})
      });
  }

  ConsultaPersonaPorId(id:string):Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`http://localhost:3000/personas/${id}`)
  }

  ObtenerRegistrosPersona():Observable<ModeloPersona[]>{
    return this.http.get<ModeloPersona[]>("http://localhost:3000/personas");
  }

}
