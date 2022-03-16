import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  arrPersonajes: any[];

  constructor(
    private personajesService: PersonajesService
  ) {
    this.arrPersonajes = [];
  }

  async ngOnInit() {
    const response = await this.personajesService.getAll();
    this.arrPersonajes = response.results;
  }

}