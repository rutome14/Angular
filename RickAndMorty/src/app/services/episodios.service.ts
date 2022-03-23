import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://rickandmortyapi.com/api/episode';
  }

  getByIds(pIds: string) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${pIds}`)
    );
  }

}
