import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductosPendientes: Producto[];
  arrProductosComprados: Producto[];

  constructor() {
    this.arrProductosComprados = [];
    this.arrProductosPendientes = [];
  }

  onProductoCreado($event: Producto) {
    this.arrProductosPendientes.push($event);
    console.log(this.arrProductosPendientes);
  }

  onProductoSeleccionado($event: number) {
    // $event es el índice del producto seleccionado dentro del array de Pendientes
    const productosBorrados = this.arrProductosPendientes.splice($event, 1);
    this.arrProductosComprados.push(productosBorrados[0]);
  }

  onProductoSeleccionadoComprado($event: number) {
    const productosBorrados = this.arrProductosComprados.splice($event, 1);
    this.arrProductosPendientes.push(productosBorrados[0]);
  }

}