import { Component, OnInit } from '@angular/core';

import { Post } from '../../models';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(private readonly _post: PostService) { }

  ngOnInit() {
    console.log(this._post);
    this._post.getPosts().subscribe(posts => {
      console.log('Got our data ', posts);
      console.log('This is the this ', this);
      this.posts = posts;
    });
  }

}
