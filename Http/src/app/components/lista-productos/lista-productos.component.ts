import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: any[];

  constructor(
    private productsService: ProductsService
  ) {
    this.arrProductos = [];
  }

  // ngOnInit(): void {
  //   this.productsService.getAll()
  //     .then((response) => {
  //       this.arrProductos = response.data;
  //     });
  // }

  async ngOnInit() {
    const response = await this.productsService.getAll();
    this.arrProductos = response.data;
  }

}


// En la url https://peticiones.online/api/series OBTENEMOS UN ARRAY DE SERIES
// RUTA: /series -> ListaSeries
// SERVICIO: Series
    // - Método getAll()
// COMPONENTE: ejecutamos el método getAll y mostramos las Series


// RUTA: /series/new -> FormSeries
// Dentro del componente FormSeries generamos UN FORMULARIO con todos los campos que requiera la creación de la serie
// Dentro del método onSubmit debemos recuperar los valores en un console.log

// title: string, creator: string, rating: number, dates: string, image: string, channel: string