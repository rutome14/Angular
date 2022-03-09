import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { ComandaComponent } from './components/comanda/comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
