import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  arrSeries: Serie[];
  canales: string[];

  constructor(
    private seriesService: SeriesService
  ) {
    this.arrSeries = [];
    this.canales = [];
  }

  ngOnInit(): void {
    // Para ejecutar una función incluida dentro de un servicio, dicho servicio debe estar inyectado en el componente
    this.arrSeries = this.seriesService.getAll();
    this.canales = this.seriesService.getCanales();
  }

  onChange($event: any) {
    // Filtrar las series en función del canal seleccionado
    this.arrSeries = this.seriesService.getByCanal($event.target.value);
  }

}





/**
 * 
 * 1 - ¿Qué ruta es la que voy a definir?
 * 
 * /series/IDENTIFICADOR
 *  - Dentro del routing tengo que agregar esta nueva ruta
 *  - Esta ruta activa el componente DetalleSerie
 * 
 * 2 - ¿Cómo le hago llegar a dicha ruta la serie que quiero mostrar?
 *  - Dentro de la URL podemos recuperar el ID de la serie que vamos a mostrar
 *  - Para recuperar dicho ID necesito el objeto ActivatedRoute
 * 
 * 3 - ¿Cómo recupero los datos de dicha serie?
 *  - Creo el método getById en el servicio de series
 *
 */