import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from '../../actions';
import { Movie } from '../../models/movies.models';
import * as fromMovies from '../../reducers';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.scss']
})
export class MovieTemplateComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(
    public store: Store<fromMovies.AppState>
  ) { }

  ngOnInit(): void {
    console.log('Single Movie: ', this.movie)
  }

  likeMovie(): void {
    this.store.dispatch(new MovieActions.LikeMovie(this.movie))
  }

}
