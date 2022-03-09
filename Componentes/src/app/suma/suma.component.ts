import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

  // 1 - Declaro el EventEmitter
  @Output() sumaRealizada: EventEmitter<number>;

  resultado: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
    // 2 - Inicializamos el EventEmitter
    this.sumaRealizada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  resolverSuma() {
    this.resultado = this.num1 + this.num2;
    // 3 - Emito el valor que quiera
    this.sumaRealizada.emit(this.resultado);
  }

}