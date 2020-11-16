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

import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MovieEffects } from './effects/movies.effects';
import { MoviesHomeComponent } from './views/movies-home/movies-home.component';
import * as movieReducer from './reducers/movie.reducer';
import { MovieFormComponent } from './components/movie-form/movie-form.component';


@NgModule({
  declarations: [MoviesHomeComponent, MovieTableComponent, MovieFormComponent],
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
