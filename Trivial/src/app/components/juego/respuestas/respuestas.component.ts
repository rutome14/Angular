import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  @Input() respuestas: string[];

  @Output() respuestaSeleccionada: EventEmitter<number>;

  constructor() {
    this.respuestas = [];
    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pIndice: number) {
    this.respuestaSeleccionada.emit(pIndice);
  }

}
