import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { Serie } from 'src/app/interfaces/serie.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent implements OnInit {

  detalle: Serie;
  arrPersonajes: Personaje[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService,
    private personajesService: PersonajesService
  ) {
    this.detalle = {};
    this.arrPersonajes = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.detalle = this.seriesService.getById(params['serieId']);
      this.arrPersonajes = this.personajesService.getBySerie(params['serieId']);
      console.log(this.arrPersonajes);
    });
  }

}
