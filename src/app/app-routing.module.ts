import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature-movie/modules/auth/views/login/login.component';
import { MoviesHomeComponent } from './feature-movie/modules/movies/views/movies-home/movies-home.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'movies-home', component: MoviesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
