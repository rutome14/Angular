import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleados: any[];
  empleadosSeleccionados: any[];

  constructor() {
    this.empleados = [
      { nombre: 'Ines García', direccion: 'C Ballesta 45', email: 'ines@gmail.com', departamento: 'marketing' },
      { nombre: 'Raúl Romero', direccion: 'C Barco 15', email: 'raul@gmail.com', departamento: 'desarrollo' }
    ];
    this.empleadosSeleccionados = [];
  }

  onCuentaFinalizada($event: string) {
    console.log($event);
  }

  onSumaRealizada($event: number) {
    console.log(`El resultado de la suma es: ${$event}`);
  }

  onSeleccionarEmpleado($event: any) {
    this.empleadosSeleccionados.push($event);
    console.log(this.empleadosSeleccionados);
  }

}
