import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() seleccionados: any[];

  constructor() {
    this.seleccionados = [];
  }

  ngOnInit(): void {
  }

  // Función NOMBRE A ELEGIR que sume todos los precios de todos los productos del array seleccionados y RETORNE el resultado

  // En el HTML EJECUTAR dicha función
  calcularTotal() {
    let total = 0;
    for (let seleccionado of this.seleccionados) {
      total += seleccionado.precio;
    }
    return total;
  }

  onClick(pIndice: number) {
    this.seleccionados.splice(pIndice, 1);
  }

}
