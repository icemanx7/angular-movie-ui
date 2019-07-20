import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { UserLogin, UserLoginResponse } from '../models/login-page.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin): Observable<UserLoginResponse> {
    console.log('richard here', userLogin)
    return this.http.post<UserLoginResponse>('/login', { username:userLogin.username, password: userLogin.password });
  }
}
