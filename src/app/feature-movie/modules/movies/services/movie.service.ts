import { Injectable } from '@angular/core';
import { Movie, Movies } from '../models/movies.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private _baseUrlSingle = '/movie';
  private _baseUrlList = '/movies';

  constructor(private http: HttpClient) { }

  loadMoviesList(): Observable<Movies> {
    return this.http.get<Movie[]>(this._baseUrlList).pipe(
      map(resp => {
        return { movies: resp } as Movies;
      })
    );
  }

}
