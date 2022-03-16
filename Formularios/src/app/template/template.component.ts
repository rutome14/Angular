import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('parrafo') parrafo: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue: { nombre: string, apellidos: string, edad: number, direccion: string }) {
    console.log(formValue);
  }

  onClick() {
    console.log(this.parrafo);
    this.parrafo.nativeElement.style.backgroundColor = 'red';
    console.log(this.parrafo.nativeElement.innerText);
  }

}
