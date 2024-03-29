import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { NewPostComponent } from './new-post/new-post.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../guards/auth-guard.service';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, NewPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
})
export class DashboardModule { }
