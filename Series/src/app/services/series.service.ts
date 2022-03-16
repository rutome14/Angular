import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() {
  }

  /**
   * Recupera todas las series del array
   * @returns devuelve un array de series
   */
  getAll(): Serie[] {
    return SERIES;
  }

  /**
   * Recupera todos los canales
   * @returns un array de strings con todos los canales, sin repetir
   */
  getCanales(): string[] {
    return [...new Set(SERIES.map(serie => serie.canal))]
  }

  /**
   * Recupera todas las series de un canal en concreto
   * @param pCanal Canal por el cual se realizará el filtro
   * @returns Un array con todas las series pertenecientes a un canal en concreto
   */
  getByCanal(pCanal: string): Serie[] {
    return SERIES.filter(serie => serie.canal === pCanal);
  }

  /**
   * Recupera una serie a partir de su ID
   * @param pSerieId El identificador de la serie que quiero recuperar
   * @returns Un objeto de tipo Serie recuperado a partir del ID que pasamos por parámetro 
   */
  getById(pSerieId: number): Serie {
    return SERIES.find(serie => serie.id === Number(pSerieId));
  }

}
