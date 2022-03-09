import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'a'; // r, v, a
  }

  ngOnInit(): void {
    // Cada segundo, si el color seleccionado es rojo, pase a amarillo, si es amarillo pase a verde, si es verde pase a rojo
    setInterval(() => {
      if (this.colorSeleccionado === 'r') {
        this.colorSeleccionado = 'a';
      } else if (this.colorSeleccionado === 'a') {
        this.colorSeleccionado = 'v';
      } else if (this.colorSeleccionado === 'v') {
        this.colorSeleccionado = 'r';
      }
      // this.colorSeleccionado = (this.colorSeleccionado === 'r') ? 'a' : (this.colorSeleccionado === 'a') ? 'v' : 'r';
    }, 1000);

  }

}
