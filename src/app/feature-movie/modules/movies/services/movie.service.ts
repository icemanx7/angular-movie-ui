import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private _baseUrlSingle = '/movie';
  private _baseUrlList = '/movies';

  constructor(private http: HttpClient) { }

  loadMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._baseUrlList);
  }

}
