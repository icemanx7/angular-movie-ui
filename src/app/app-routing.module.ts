import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/feature-auth/views/login/login.component';
import { MoviesHomeComponent } from './modules/feature-movie/views/movies-home/movies-home.component';
import { AuthGuard } from './modules/feature-auth/auth.guard';
import { LikedMoviesHomeComponent } from './modules/feature-movie/views/liked-movies-home/liked-movies-home.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: MoviesHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'liked-movies', component: LikedMoviesHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
