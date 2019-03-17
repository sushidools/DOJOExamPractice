import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models';
import { User } from '../../models';

import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  currentUser: any;

  constructor(
    private readonly _post: PostService,
    private readonly _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this._post);
    this._post.getPosts().subscribe(data => {
      console.log('Got our data ', data);
      console.log('This is the this ', this);
      this.posts = data['posts'];
    });
    this._auth.getCurrentUser().subscribe(user => {
      // console.log('Got our current user ', user);
      // console.log('This is the this ', this);
      this.currentUser = user;
    });
  }

  refresh() {
    this.router.navigateByUrl('/dashboard/home');
    this.ngOnInit();
  }

  deletepost(p) {
    // console.log('deleting post ', p);
    const postID = p._id;
    // console.log('Here is the id for the post ', postID);
    this._post.deletePost(postID).subscribe(post => {
      // console.log('deleting the post ', post);
      // console.log('This is the this ', this);
      this.refresh();
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    // console.log('clicking button ');
  }

  onClickE(event: Event) {
    event.stopPropagation();
    // console.log('clicking button for edit ');
  }

  editPost(p) {
    // console.log('going to page to edit post ', p);
    const postID = p._id;
    this.router.navigateByUrl('/dashboard/edit/' + postID);
  }

  onInfoClick(event: Event) {
    event.stopPropagation();
    // console.log('Clicking the info button! ');
  }

  showInfo(id) {
    console.log('The user of this post is ', id);
    this._auth.getUser(id).subscribe(user => {
      // console.log('This is the post user ', user);
      alert('The user ' + user['user']['firstName'] + ' ' + user['user']['lastName'] + ' made this post.');
    });
  }
}
