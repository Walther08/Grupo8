import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptoJS from 'crypto-js';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required]],
    'clave':['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioAdministracion: AdministracionService) { }

  ngOnInit(): void {
    
  }
  
  EnviarPersona(){
    let nombresPersona = this.fgValidator.controls["nombres"].value;
    let apellidosPersona = this.fgValidator.controls["apellidos"].value;
    let correoPersona = this.fgValidator.controls["correo"].value;
    let celularPersona = this.fgValidator.controls["celular"].value;
    let clavePersona = this.fgValidator.controls["clave"].value;
    //let claveCifrada = cryptoJS.MD5(clavePersona).toString();
    let nuevaPersona = new ModeloPersona();
    nuevaPersona.nombres = nombresPersona;
    nuevaPersona.apellidos = apellidosPersona;
    nuevaPersona.correo = correoPersona;
    nuevaPersona.celular = celularPersona;
    nuevaPersona.clave = clavePersona;
    
    this.servicioAdministracion.CrearPersona(nuevaPersona).subscribe((datos:ModeloPersona)=>{
      alert("La persona fue creada correctamente");
    },(error:any)=>{
      alert("Error en el almacenamiento");
    });
  }

}
