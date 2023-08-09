import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoImageService } from 'src/app/servicios/proyectoImage.service';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto:Proyecto = null;
  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imageProyectoService : ProyectoImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.img = this.imageProyectoService.url
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el proyecto ");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageProyectoService.uploadImage($event, name)
  }

}
