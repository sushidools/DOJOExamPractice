import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Post } from './../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly base = '/api/post';
  constructor(
    private readonly http: HttpClient
  ) { }

  addPost(post: Post): Observable<Post> {
    return this.http
      .post<Post>(`${this.base}/new/post`, post);
  }

  getPostForEdit(id: string): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.base}/${id}`);
  }
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.base);
  }

  deletePost(id: string): Observable<Post> {
    // console.log('Do I have the id here in the service? ', id);
    return this.http.delete<Post>(`${this.base}/${id}`);
  }

  editPost(id: string, post: Post): Observable<Post> {
    console.log('The post id ', id);
    return this.http.put<Post>(`${this.base}/${id}`, post);
  }

}
