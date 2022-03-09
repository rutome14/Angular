import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  resultado: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.resultado = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // Los parámetros dinámicos en una URL siempre vienen en formato STRING
      this.resultado = parseInt(params['empleadoId']);
    });
  }

}



// El empleado seleccionado es: NUMERO

// URL: /autor/12121/libro/1289 -> AutorDetail
// Dentro del componente AutorDetail, en el HTML, hay que mostrar el ID del autor y el ID del libro