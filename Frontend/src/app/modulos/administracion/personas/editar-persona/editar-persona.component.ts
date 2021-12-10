import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'celular':['',[Validators.required]],
    'clave':['',[Validators.required]]
  })

  id:string = "";

  constructor(private fb:FormBuilder, 
    private servicioAdministracion:AdministracionService,
    private route: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarPersona();
    
  }

  EditarPersona(){
    let nombresPersona = this.fgValidator.controls["nombres"].value;
    let apellidosPersona = this.fgValidator.controls["apellidos"].value;
    let correoPersona = this.fgValidator.controls["correo"].value;
    let celularPersona = this.fgValidator.controls["celular"].value;
    let clavePersona = this.fgValidator.controls["clave"].value;

    let editarPersona = new ModeloPersona();
    editarPersona.nombres = nombresPersona;
    editarPersona.apellidos = apellidosPersona;
    editarPersona.correo = correoPersona;
    editarPersona.celular = celularPersona;
    editarPersona.clave = clavePersona;

    editarPersona.id=this.id;

      this.servicioAdministracion.EditarPersona(editarPersona).subscribe((datos:ModeloPersona)=>{
        alert("La persona se edito correctamente")
        this.router.navigate(["/administracion/personas"])
      }),(error:any)=>{
        alert("Error en la edicion")
      }
  }

  BuscarPersona(){
    this.servicioAdministracion.ConsultaPersonaPorId(this.id).subscribe((datos:ModeloPersona)=>{
      this.fgValidator.controls['nombres'].setValue(datos.nombres);
      this.fgValidator.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidator.controls['correo'].setValue(datos.correo);
      this.fgValidator.controls['clave'].setValue(datos.id);
    },(error:any)=>{
      alert("La persona no existe");
    })
  }

}
