import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/pregunta.interface';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  arrPreguntas: Pregunta[];

  constructor() {
    this.arrPreguntas = [
      {
        titulo: '¿Bla bla bli?',
        respuestas: ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'],
        respuestaCorrecta: 2,
        puntuacion: 100
      },
      {
        titulo: '¿Otra?',
        respuestas: ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'],
        respuestaCorrecta: 2,
        puntuacion: 100
      }
    ]
  }

  ngOnInit(): void {
  }

  onRespuestaSeleccionada($event: number) {
    if (this.arrPreguntas[0].respuestaCorrecta === $event) {
      alert('Respuesta correcta');
    } else {
      alert('Respuesta Incorrecta');
    }
  }

}
