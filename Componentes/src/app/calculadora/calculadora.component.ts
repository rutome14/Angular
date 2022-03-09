import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;

  operacionResuelta: boolean;

  constructor() {
    this.resultado = '';
    this.operacionResuelta = false;
  }

  ngOnInit(): void {
  }

  pulsaBoton(botonPulsado: string) {
    if (this.operacionResuelta) {
      this.resultado = botonPulsado;
      this.operacionResuelta = false;
    } else {
      this.resultado += botonPulsado;
    }
  }

  resolver() {
    this.resultado = eval(this.resultado);
    this.operacionResuelta = true;
  }

  pulsarBotonC() {
    this.resultado = '';
  }

}


// Al pulsar cualquiera de los botones numéricos o de cálculo, si el paso anterior ha sido la resolución de la operación, NO DEBEMOS CONCATENAR, habría que poner en resultado únicamente el botón pulsado