import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ClasesComponent } from './clases/clases.component';
import { CondicionalComponent } from './condicional/condicional.component';
import { EpisodiosComponent } from './episodios/episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    ClasesComponent,
    CondicionalComponent,
    EpisodiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
