import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() producto: any;

  constructor() {
    this.producto = {};
  }

  ngOnInit(): void {
  }

  onClick(incrementar: boolean) {
    if (incrementar) {
      this.producto.stock++;
    } else {
      this.producto.stock--;
    }
  }

}
