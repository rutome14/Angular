import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodiosService } from 'src/app/services/episodios.service';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  arrEpisodios: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService,
    private episodiosService: EpisodiosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(async params => {
      const personajeSeleccionado = await this.personajesService.getById(params['idPersonaje']);

      // const arrNums = [];
      // for (let episodio of personajeSeleccionado.episode) {
      //   const indice = episodio.indexOf('/episode/');
      //   const numero = episodio.substring(indice + 9);
      //   arrNums.push(numero);
      // }
      // const cadena = arrNums.join(',');
      // console.log(cadena);

      const cadena = personajeSeleccionado.episode.map(episodio => episodio.split('/episode/')[1]).join(',');
      console.log(cadena);

      this.arrEpisodios = await this.episodiosService.getByIds(cadena);
    });
  }

}


/**
 * 
 * OBJETIVO: Recuperar los datos de los episodios de un personaje en concreto
 * 
 *! 1. Recuperar el ID del personaje de la URL (ActivatedRoute)
 *! 2. ¿Cómo recupero todos los episodios de un personaje? (los ids de los episodios)
 * 3. ¿Cómo recupero todos los datos de todos los episodios?
 * 
 */
