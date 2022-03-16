import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[]

  constructor() {
    this.arrPosts = [];
  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  // Método que reciba un post y lo inserte dentro del array
  create(pPost: Post) {
    this.arrPosts.push(pPost);
  }

}
