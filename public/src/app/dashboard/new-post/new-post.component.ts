import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from '../../models';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {
  post = new Post();
  sub: Subscription;
  postErrors: string[] = [];

  constructor(
    private readonly _post: PostService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  onSubmit(event: Event, post: Post) {
    event.preventDefault();
    this.sub = this._post.addPost(post).subscribe(
      newPost => {
        console.log(newPost);
        this.router.navigateByUrl('dashboard');
      },
      error => {
        console.log(error);
        this.handleErrors(error.error);
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private handleErrors(error: string | string[]) {
    this.postErrors = Array.isArray(error) ? error : [error];
  }
}
