import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

  opcionSeleccionada: string;
  idPulsado: number;

  constructor() {
    this.opcionSeleccionada = ''
    this.idPulsado = 0;
  }

  ngOnInit(): void { }

  onClick(seccion: string) {
    // Es una variable que se llama opcionSeleccionada estoy guardando el valor que me llega por parámetro
    this.opcionSeleccionada = seccion;
  }

  onClickV2($event: any) {
    this.idPulsado = parseInt($event.target.id);
  }

}
