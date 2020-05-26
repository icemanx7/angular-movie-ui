import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from './views/movies-home/movies-home.component';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './effects/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import * as movieReducer from './reducers/movie.reducer';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MatButtonModule, MatPaginatorModule, MatCardModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [MoviesHomeComponent, MovieTableComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer.reducer),
    EffectsModule.forFeature([MovieEffects]),
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MoviesModule { }
