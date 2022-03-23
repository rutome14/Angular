import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  personaje: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params);
      // En params.idPersonaje tengo el valor del ID del personaje que quiero recuperar
      this.personaje = await this.personajesService.getById(params['idPersonaje']);
      // Lo que me devuelve el API ES UN OBJETO
      // ¿Cómo lo muestro en el HTML del detalle?
    });
  }

}



// Cuando acceda al a url /personajes/2/episodios
// Quiero que aparezca todo lo del personaje
// En un espacio por debajo una lista de los episodios en los que aparece

/**
 * Componente: ListaEpisodios
 * Modificar la ruta y agregar el children
 * Modificar el HTML del padre para agregar el router-outlet
 * Dentro del componente de la listaEpisodios lanzar la petición al servidor para recuperar dicha lista
 */

// Cuando acceda al a url /personajes/2
// Quiero que aparezca todo lo del personaje