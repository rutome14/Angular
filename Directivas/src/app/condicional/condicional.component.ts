import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {

  mostrar: boolean;

  constructor() {
    this.mostrar = true;
  }

  ngOnInit(): void {
  }

  onClickMostrar() {
    this.mostrar = !this.mostrar;
    // toggle
  }

}
