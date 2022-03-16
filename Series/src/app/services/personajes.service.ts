import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  /**
   * Recupera todos los personajes pertenecientes a una serie
   * @param pSerieId El identificador de la serie
   * @returns Un array de objetos de tipo Personaje pertenecientes a la serie especificada
   */
  getBySerie(pSerieId: number): Personaje[] {
    const result = [];
    for (let personaje of PERSONAJES) {
      if (personaje.serie === Number(pSerieId)) {
        result.push(personaje);
      }
    }
    return result;
    // return PERSONAJES.filter(personaje => personaje.serie === pSerieId);
  }

}


/**
 * 
 * - Utilizar el componente de la Lista de personajes para mostrar el array de personajes
 * - ¿Cómo hacer para que dicho componente aparezca en función de la url : /series/7/personajes
 * 
 */