import { Injectable } from '@angular/core';
import { Movie, Movies, MovieReview } from '../models/movies.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private _baseUrlSingle = '/movie';
  private _baseSubmitReview = '/submitreview';
  private _baseUrlList = '/meta';

  constructor(private http: HttpClient) { }

  loadMoviesList(): Observable<Movies> {
    return this.http.get<Movie[]>(this._baseUrlList).pipe(
      map(resp => {
        const moviesList = { movies: resp }
        return moviesList as Movies;
      })
    );
  }

  submitMovieReview(postObj: MovieReview): Observable<MovieReview> {
    return this.http.post<MovieReview>(this._baseSubmitReview, postObj).pipe(
      map(resp => {
        return resp;
      })
    );
  }

}
