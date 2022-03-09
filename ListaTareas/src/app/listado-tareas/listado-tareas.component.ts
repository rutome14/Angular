import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

  @Input() lista: Tarea[];

  constructor() {
    this.lista = [];
  }

  ngOnInit(): void {
  }

  onClick(pTarea: Tarea) {
    // if (pTarea.completa) {
    //   pTarea.completa = false;
    // } else {
    //   pTarea.completa = true;
    // }

    // pTarea.completa = pTarea.completa ? false : true;

    pTarea.completa = !pTarea.completa;
  }

  onClickBorrar(indice: number) {
    this.lista.splice(indice, 1);
  }

}
