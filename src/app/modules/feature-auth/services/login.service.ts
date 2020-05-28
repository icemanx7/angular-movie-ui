import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { UserLogin, UserLoginResponse } from '../models/login-page.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl = '/login';
  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(this._baseUrl, { username:userLogin.username, password: userLogin.password });
  }
}
