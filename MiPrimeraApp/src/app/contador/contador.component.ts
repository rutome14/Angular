import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  numero: number;

  constructor() {
    this.numero = 0;

    // Por cada segundo debemos incrementar en 1 el numero y que eso se refleje en el HTML -> setInterval
    // setInterval(() => {
    //   this.numero++;
    // }, 1000);
  }

  ngOnInit(): void {
  }

  pulsaBoton() {
    this.numero++;
  }

}
