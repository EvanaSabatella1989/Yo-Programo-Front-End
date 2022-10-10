import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// el module es tambien una clase al igual que el Component, que solo esta decorado con el @NgModule que 
//se encarga de indicarle a angular donde estan los bloques que necesita para su construccion, por ejemplo la 
//declaracion de componentes o artefactos
//los bloques que necesita importar
//los provedores en caso que se necesite consumir algun servicio

