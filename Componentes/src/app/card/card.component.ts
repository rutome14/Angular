import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // PROPIEDADES
  @Input() nombre: string;
  @Input() direccion: string;
  @Input() email: string;
  @Input() departamento: string;

  // 1 - Declaro el Output
  @Output() seleccionarEmpleado: EventEmitter<any>;

  constructor() {
    // INICIALIZAMOS PROPIEDADES
    this.nombre = 'Mario Girón';
    this.direccion = 'Gran Vía 34';
    this.email = 'mario@email.com';
    this.departamento = 'Desarrollo';

    this.seleccionarEmpleado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  pulsaBoton() {
    const empleado = {
      nombre: this.nombre,
      email: this.email,
      direccion: this.direccion,
      departamento: this.departamento
    }
    this.seleccionarEmpleado.emit(empleado);
  }

}

