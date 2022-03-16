import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({});
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Modifico la fecha para transformala a objeto Date
    const fechaCreacion = new Date(this.formulario.value.createdAt);
    this.formulario.value.createdAt = fechaCreacion;

    // Mediante el servicio insertamos el nuevo Post dentro del array
    this.postsService.create(this.formulario.value);
    alert('Post insertado');

    // Navego hacia la ruta /posts
    // this.router.navigate(['/posts']);

    // Si quiero crear un nuevo post
    this.formulario.reset();
  }

}