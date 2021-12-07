import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    var s=document.createElement("script");
    s.type="text/javascript";
    s.innerHTML="console.log('done');"; //inline script

  }

}
