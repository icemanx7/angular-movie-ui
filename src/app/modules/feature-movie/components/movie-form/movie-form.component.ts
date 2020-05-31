import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieReview, ReviewForm } from '../../models/movies.models';
import * as auth from '../../../feature-auth/reducers';
import { Store } from '@ngrx/store';
import { SubmitMovieReview } from '../../actions/movie.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Input()
  movie: Movie

  reviewForm = new FormGroup({
    review: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  constructor(
    public store: Store<auth.AppState>
  ) { }

  ngOnInit() { }

  submitReview() {
    if (!this.reviewForm.valid) {
      return;
    }
    const formValues = this.reviewForm.value as ReviewForm;
    const date = new Date();
    const testReview = { movieID: this.movie.id, review: formValues.review, rating: formValues.rating, reviewDate: date } as MovieReview;
    this.store.dispatch(SubmitMovieReview(testReview));
  }

}
