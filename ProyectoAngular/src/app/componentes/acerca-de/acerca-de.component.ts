import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:persona = new persona("", "", "");
  //acercaDe:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.acercaDe=data.data;
    // })
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
