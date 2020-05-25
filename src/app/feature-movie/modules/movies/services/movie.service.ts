import { Injectable } from '@angular/core';
import { Movie, Movies } from '../models/movies.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private _baseUrlSingle = '/movie';
  private _baseUrlList = '/movies';

  constructor(private http: HttpClient) { }

  loadMoviesList(): Observable<Movies> {
    return this.http.get<Movies>(this._baseUrlList);
  }

}
