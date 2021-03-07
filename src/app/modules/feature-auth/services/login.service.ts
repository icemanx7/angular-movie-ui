import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserLoginResponse } from '../models/login-page.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _baseUrl = '/login';

  constructor(private readonly http: HttpClient) { }

  login(userLogin: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(this._baseUrl,
      {
        username: userLogin.username,
        password: userLogin.password
      });
  }
}
