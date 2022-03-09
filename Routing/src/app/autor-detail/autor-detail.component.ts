import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor-detail',
  templateUrl: './autor-detail.component.html',
  styleUrls: ['./autor-detail.component.css']
})
export class AutorDetailComponent implements OnInit {

  autorId: number;
  libroId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.autorId = 0;
    this.libroId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.autorId = parseInt(params['autorId']);
      this.libroId = parseInt(params['libroId']);
    });
  }

}
