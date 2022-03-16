import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() colorFondo: string;
  @Input() colorTexto: string;
  @Input() secciones: string[];

  @Output() seccionPulsada: EventEmitter<string>;

  constructor() {
    this.colorFondo = '';
    this.colorTexto = '';
    this.secciones = [];
    this.seccionPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pSeccion: string) {
    this.seccionPulsada.emit(pSeccion);
  }

}
