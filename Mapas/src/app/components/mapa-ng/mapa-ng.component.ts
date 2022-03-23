import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-mapa-ng',
  templateUrl: './mapa-ng.component.html',
  styleUrls: ['./mapa-ng.component.css']
})
export class MapaNgComponent implements OnInit {

  lat: number;
  lng: number;
  arrPaises: any[];

  arrPuntos: any[];

  constructor(
    private paisesService: PaisesService
  ) {
    this.lat = 53;
    this.lng = 28;
    this.arrPuntos = [];
  }

  async ngOnInit() {
    this.arrPaises = await this.paisesService.getEurope();
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  onMapClick($event) {
    this.arrPuntos.push($event.coords);
  }

  onCenterChange($event) {
    console.log($event);
  }

}
