import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>('https://peticiones.online/api/series')
    );
  }

  create(pSerie: any) {
    return firstValueFrom(
      this.httpClient.post('https://peticiones.online/api/series', pSerie)
    );
  }

}
