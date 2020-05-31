import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from './views/movies-home/movies-home.component';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './effects/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import * as movieReducer from './reducers/movie.reducer';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MatButtonModule, MatSortModule, MatPaginatorModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
