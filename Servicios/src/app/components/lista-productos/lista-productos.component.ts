import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProds: Producto[];
  paises: string[];

  constructor(private productosService: ProductosService) {
    this.arrProds = [];
    this.paises = [];
  }

  ngOnInit(): void {
    this.arrProds = this.productosService.getAll();
    this.paises = this.productosService.getPaises();
  }

  onClick() {
    this.arrProds = this.productosService.getDisponibles();
  }

  onInput($event: any) {
    this.arrProds = this.productosService.getByPrecio($event.target.value);
  }

  onChange($event: any) {
    if ($event.target.value === 'todos') {
      this.arrProds = this.productosService.getAll();
    } else {
      this.arrProds = this.productosService.getByPais($event.target.value);
    }
  }

}