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

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.base);
  }

}
