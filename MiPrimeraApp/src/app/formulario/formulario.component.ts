import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  mensaje: string;
  bandera: string;

  constructor() {
    this.mensaje = '';
    this.bandera = '';
  }

  ngOnInit(): void {
  }

  cambiaNombre($event: any) {
    this.mensaje = $event.target.value;
  }

  cambiaPais($event: any) {
    console.log($event.target.value);
    // Dependiendo del pais seleccionado, dentro de la propiedad bandera, poner la bandera correspondiente
    // Mostrar la propiedad bandera en el HTML
    // 🇪🇸🇮🇹🇫🇷🇩🇪
    switch ($event.target.value) {
      case 'es':
        this.bandera = '🇪🇸';
        break;
      case 'it':
        this.bandera = '🇮🇹';
        break;
      case 'fr':
        this.bandera = '🇫🇷';
        break;
      case 'de':
        this.bandera = '🇩🇪'
        break;
    }
  }

}
