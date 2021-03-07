import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MovieEffects } from './effects/movies.effects';
import { MoviesHomeComponent } from './views/movies-home/movies-home.component';
import * as movieReducer from './reducers/movie.reducer';
import { MovieTemplateComponent } from './components/movie-template/movie-template.component';
import { LikedMoviesHomeComponent } from './views/liked-movies-home/liked-movies-home.component';


@NgModule({
  declarations: [MoviesHomeComponent, MovieTemplateComponent, LikedMoviesHomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer.reducer),
    EffectsModule.forFeature([MovieEffects]),
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
