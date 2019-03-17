import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Post } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  PostEdit = new Post();
  sub: Subscription;
  postErrors: string[] = [];
  postId: any;
  constructor(
    private _post: PostService,
    private router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params: ParamMap) => (this.postId = params.get('id'))
    );
    this._post.getPostForEdit(this.postId).subscribe(data => {
      this.PostEdit = data['post'];
    });
  }

  onSubmit(event: Event, PostEdit: Post) {
    console.log('The post to be editted from the component ', PostEdit);
    event.preventDefault();
    this.sub = this._post.editPost(this.postId, PostEdit).subscribe(
      edittedPost => {
        // console.log(edittedPost);
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
