/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-js',
  templateUrl: './mapa-js.component.html',
  styleUrls: ['./mapa-js.component.css']
})
export class MapaJsComponent implements OnInit {

  mapa: google.maps.Map;

  @ViewChild('divMapa') divMapa!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Recuperar la posición del dispositivo
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);

      const newCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.mapa.setCenter(newCenter);

      // Crear un marcador
      const marker = new google.maps.Marker({
        position: newCenter,
        map: this.mapa,
        animation: google.maps.Animation.DROP
      })
    });
  }

  ngAfterViewInit() {
    this.loadMap();
    this.loadAutocomplete();
  }

  // Tengo que interactuar con el HTML 
  loadMap() {
    // Carga del Mapa
    // Opciones de creación del mapa
    const options = {
      center: new google.maps.LatLng(40, -3),
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    // Creamos el mapa
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options);

    // Capturar el click sobre el mapa
    google.maps.event.addListener(this.mapa, 'click', (event) => {
      // Creo un marcador donde se haga click
      const marker = new google.maps.Marker({
        position: event.latLng,
        map: this.mapa,
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif',
          scaledSize: new google.maps.Size(50, 50)
        }
      });

      // Modificaciones sobre el marker
      marker.setDraggable(true);

      // Agregar eventos al marker
      google.maps.event.addListener(marker, 'click', (event) => {
        marker.setMap(null);
      });

      google.maps.event.addListener(marker, 'mouseover', (event) => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });

      // Cuando detecte mouseout, colocar la animación a NULL
      google.maps.event.addListener(marker, 'mouseout', (event) => {
        marker.setAnimation(null);
      });
    });
  }

  loadAutocomplete() {
    const inputPlaces = document.getElementById('inputPlaces') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(inputPlaces);

    google.maps.event.addListener(autocomplete, 'place_changed', (event) => {
      // Recupero el sitio seleccionado
      const place = autocomplete.getPlace();
      console.log(place);
      this.mapa.setCenter(place.geometry.location);

      this.calcularRuta('Pico de los artilleros 24', place.geometry.location);
    });
  }

  calcularRuta(pOrigin: any, pDestination: any) {
    // Nos permite recuperar los datos que unen dos puntos en el mapa
    const directionsService = new google.maps.DirectionsService();
    // Nos permite pintar la ruta en un mapa
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.mapa);

    directionsService.route({
      origin: pOrigin,
      destination: pDestination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result) => {
      console.log(result);
      directionsRenderer.setDirections(result);
    });
  }

}
