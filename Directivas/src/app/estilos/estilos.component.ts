import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      backgroundColor: 'rgb(127, 240, 56)'
    };
  }

  ngOnInit(): void {
  }

  cambiarColor() {
    this.estilosParrafo.backgroundColor = 'red';
  }

  cambiaColorDesplegable($event: any) {
    this.estilosParrafo.backgroundColor = $event.target.value;
  }

  cambiaTexto($event: any) {
    this.estilosParrafo.color = $event.target.value;
  }

  cambiaFontSize($event: any) {
    this.estilosParrafo.fontSize = $event.target.value + 'px';
  }

}
