import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../models';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  errors: string[] = [];

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    console.log('logging in ', user);
    this.auth.login(user).subscribe(
      loggedUser => {
        console.log('logged ', loggedUser);
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        console.log('got an error ', error.error);
        this.handleErrors(error.error);
      }
    );
  }

  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }

}
