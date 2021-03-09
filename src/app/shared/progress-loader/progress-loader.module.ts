import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './views/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreModule } from '@ngrx/store';
import * as LoaderReducer from './reducers/loader.reducer';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('loader', LoaderReducer.reducer),
  ]
})
export class ProgressLoaderModule { }
