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
  private _baseUrlList = '/movies';

  constructor(private http: HttpClient) { }

  loadMoviesList(): Observable<Movies> {
    return this.http.get<Movies>(this._baseUrlList).pipe(
      map(resp => {
        return { movies: resp.movies } as Movies;
      })
    );
  }

  submitMovieReview(postObj: MovieReview): Observable<MovieReview> {
    // console.log('DID IT WORK: ', postObj)
    // const flightObj = { movieID: postObj.movieID, userEmail: postObj.userEmail, review: postObj.review } as MovieReview;
    return this.http.post<MovieReview>(this._baseSubmitReview, postObj).pipe(
      map(resp => {
        return resp;
      })
    );
  }

}
