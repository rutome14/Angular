import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: any[];

  @Output() seleccionarProducto: EventEmitter<any>;

  constructor() {
    this.titulo = '';
    this.productos = [];
    this.seleccionarProducto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProducto: any) {
    this.seleccionarProducto.emit(pProducto);
  }

}