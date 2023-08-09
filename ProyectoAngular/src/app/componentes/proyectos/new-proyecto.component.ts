import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoImageService } from 'src/app/servicios/proyectoImage.service';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  img: string = '';
  descripcion: string = '';

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imageProyectoService : ProyectoImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.img, this.descripcion);
    proyecto.img = this.imageProyectoService.url
    this.sProyecto.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageProyectoService.uploadImage($event, name)
  }



}
