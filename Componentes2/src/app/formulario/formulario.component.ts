import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() crearPaciente: EventEmitter<any>;

  campoTexto: string;
  paciente: any;

  constructor() {
    this.campoTexto = '';
    this.paciente = {};
    this.crearPaciente = new EventEmitter();
  }

  ngOnInit(): void {

  }

  pulsaBoton() {
    this.campoTexto = 'Lo que queramos';
  }

  enviarFormulario() {
    this.crearPaciente.emit(this.paciente);
  }

}

/**
 * 
 * COMPONENTE
 * - Ts, HTML, CSS
 * - Propiedades (declaración, inicialización)
 * - @Input, @Output 
 * - ngModel
 * 
 */