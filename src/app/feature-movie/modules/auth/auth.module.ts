import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as authReducer from './reducers/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { httpInterceptorProviders } from './interceptors';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class AuthModule { }
