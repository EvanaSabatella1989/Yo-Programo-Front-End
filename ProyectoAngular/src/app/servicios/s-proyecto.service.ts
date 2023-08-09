import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Proyecto } from "../model/proyecto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class SProyectoService {
  // expURL = 'http://localhost:8080/explab/'
  // expURL = 'https://backendeds2.onrender.com/explab/';
 proyectoURL = environment.URL + 'proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id}`)
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectoURL + 'create' , proyecto);
  } 

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proyectoURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
}