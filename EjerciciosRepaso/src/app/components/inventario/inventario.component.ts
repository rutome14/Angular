import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  productos: any[];

  constructor() {
    this.productos = [
      { nombre: 'manzana', precio: 3, stock: 20, disponible: true, imagen: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg' },
      { nombre: 'plátano', precio: 2.98, stock: 10, disponible: true, imagen: 'https://www.quimicaysociedad.org/wp-content/uploads/2015/06/platano.jpg' },
      { nombre: 'pera', precio: 3, stock: 20, disponible: true, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/conservar-pera-por-mas-tiempo-gresei.jpg' },
      { nombre: 'fresa', precio: 5.32, stock: 500, disponible: false, imagen: 'https://img.interempresas.net/fotos/1341264.jpeg' },
      { nombre: 'lechuga', precio: 4.45, stock: 3, disponible: true, imagen: 'https://images.ecestaticos.com/8llVkYpZo9gN11fmBvjFeOQd10U=/0x109:2121x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg' },
      { nombre: 'melocotón', precio: 2.29, stock: 50, disponible: false, imagen: 'https://www.hogarmania.com/archivos/201305/melocotones-xl-1280x720x80xX.jpg' },
      { nombre: 'aguacate', precio: 13, stock: 12, disponible: true, imagen: 'https://s03.s3c.es/imag/_v0/770x420/3/e/8/600x400_aguacate-mitad-770-dreamstime.jpg' },
    ];
  }

  ngOnInit(): void {
  }

  calcularPrecioTotal() {
    let resultado = 0;
    for (let prod of this.productos) {
      resultado += prod.precio * prod.stock;
    }
    return resultado;
  }

}


// Repetir en el HTML de inventario tantas veces el componente detalle como elementos tengamos en el array productos