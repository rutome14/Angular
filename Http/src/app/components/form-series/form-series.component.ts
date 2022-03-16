import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-form-series',
  templateUrl: './form-series.component.html',
  styleUrls: ['./form-series.component.css']
})
export class FormSeriesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private seriesService: SeriesService
  ) {
    this.formulario = new FormGroup({
      title: new FormControl(),
      creator: new FormControl(),
      rating: new FormControl(),
      dates: new FormControl(),
      image: new FormControl(),
      channel: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.seriesService.create(this.formulario.value)
  //     .then(response => {
  //       console.log(response);
  //     })
  // }

  async onSubmit() {
    const response = await this.seriesService.create(this.formulario.value);
    console.log(response);
  }

}



/**
 * 
 * NUEVO PROYECTO: RickAndMorty
 * Rutas:
 *   path: /personajes - component: ListaPersonajes
 * 
 * Servicio: Personajes
 *  - Método que recupera todos los personajes
 * 
 * ListaPersonajes: Mostramos todos los personajes
 *  (nombre, especie, género, imagen, nombre location)
 * 
 * Si el personaje está vivo colocar el borde en verde
 * Si está muerto colocar el borde en rojo
 * 
 * 
 * BLOG -> Filtrar los posts por categoria
 * 
 */