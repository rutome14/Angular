import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  numero: number;

  constructor() {
    this.numero = 10;
  }

  ngOnInit(): void {
  }

  pulsaBoton() {
    const interval = setInterval(() => {
      this.numero--;
      if (this.numero === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
