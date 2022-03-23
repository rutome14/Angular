import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEurope() {
    return firstValueFrom(
      this.httpClient.get<any[]>('https://restcountries.com/v3.1/region/europe')
    );
  }

}
