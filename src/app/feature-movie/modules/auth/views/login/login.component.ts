import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as auth from '../../reducers/auth.reducer';
import { Login } from '../../actions/login-page.actions';
import { UserLogin } from '../../models/login-page.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public store: Store<auth.State>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Testing if this code actually works')
    console.log(this.loginForm.value)
    const loginValue = this.loginForm.value as UserLogin;
    this.store.dispatch(Login(loginValue));
  }

}
