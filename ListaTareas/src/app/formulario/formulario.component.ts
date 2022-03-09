import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;

  @Output() crearTarea: EventEmitter<Tarea>;

  constructor() {
    this.nuevaTarea = { titulo: '', prioridad: '', completa: false };
    this.crearTarea = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.crearTarea.emit(this.nuevaTarea);
    this.nuevaTarea = { titulo: '', prioridad: '', completa: false };
  }

}
