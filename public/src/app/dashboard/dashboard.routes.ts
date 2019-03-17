import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';

import { AuthGuard } from '../guards/auth-guard.service';
import { EditPostComponent } from './edit-post/edit-post.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'new/post', component: NewPostComponent },
      { path: 'edit/:id', component: EditPostComponent},
    ]
  }
];
