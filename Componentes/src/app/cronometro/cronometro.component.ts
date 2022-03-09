import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number;

  // 1 - Declaramos el Output
  @Output() cuentaFinalizada: EventEmitter<string>;

  // ¿Cómo le puedo pasar una propiedad FIN para que termine en ese número en vez de en cero

  constructor() {
    this.inicio = 0;
    // 2 - Inicializo el OUTPUT
    this.cuentaFinalizada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  comenzarCuenta() {
    const interval = setInterval(() => {
      this.inicio--;
      if (this.inicio === 0) {
        clearInterval(interval);
        // 3 - Emito información al componente padre
        this.cuentaFinalizada.emit('El cronometro ha finalizado')
      }
    }, 1000);
  }

}