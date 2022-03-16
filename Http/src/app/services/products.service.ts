import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Solo podemos lanzar peticiones si tenemos disponible el servicio HttpClient
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    // Para descargar la información tengo que realizar una petición GET sobre la URL
    // Devuelve un Observable
    const obs = this.httpClient.get<any>('https://peticiones.online/api/products')
    return firstValueFrom(obs);
  }

}


