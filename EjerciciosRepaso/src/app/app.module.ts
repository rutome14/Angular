import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TabBarComponent,
    InventarioComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
