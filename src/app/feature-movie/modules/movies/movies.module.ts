import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from './views/movies-home/movies-home.component';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './effects/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import * as movieReducer from './reducers/movie.reducer';



@NgModule({
  declarations: [MoviesHomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('movie', movieReducer.reducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule { }
