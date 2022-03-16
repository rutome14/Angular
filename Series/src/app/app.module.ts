import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    DetalleSerieComponent,
    ListaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
