import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // Declaración de la propiedad: nombre + tipo
  nombre: string;
  identificador: string;
  imagen: string;

  constructor() {
    // Lo utilizamos para dar el valor inicial a las propiedades del componente -> inicializar las propiedades
    this.nombre = 'Rocío';
    this.identificador = 'parrafo';
    this.imagen = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/perritos-de-instagram-1616062929.jpg';

    setTimeout(() => {
      this.nombre = 'Irene';
      this.identificador = 'nuevoIdentificador';
      this.imagen = 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg';
    }, 3000);

  }

  ngOnInit(): void {
  }

  mostrarMensaje(): string {
    return 'Un string cualquiera';
  }

}
