import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  arrSeries: any[];

  constructor(
    private seriesService: SeriesService
  ) {
    this.arrSeries = [];
  }

  // ngOnInit(): void {
  //   this.seriesService.getAll()
  //     .then(response => {
  //       this.arrSeries = response;
  //     })
  // }

  async ngOnInit() {
    const response = await this.seriesService.getAll();
    this.arrSeries = response;
  }

}
