import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as authReducer from './reducers/auth.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer.reducer })
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
