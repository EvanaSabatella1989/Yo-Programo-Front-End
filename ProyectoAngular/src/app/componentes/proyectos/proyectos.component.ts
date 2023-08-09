import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  // proyectoList:any;
  proyecto:Proyecto[] = []
  // constructor(private datosPorfolio:PorfolioService) { }
  constructor(public sProyecto : SProyectoService, private router:Router, private tokenService: TokenService){}
  isLogged = false;
  // ngOnInit(): void {
  //   this.datosPorfolio.obtenerDatos().subscribe(data=>{
  //     this.proyectoList=data.projects;
  //   })
  // }

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.sProyecto.lista().subscribe(
      data => {this.proyecto = data}
    );
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
