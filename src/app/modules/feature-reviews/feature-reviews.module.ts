import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { ReviewComponent } from './view/review/review.component';
import { ReviewCardComponent } from './component/review-card/review-card.component';
import { ReviewCardItemComponent } from './component/review-card-item/review-card-item.component';



@NgModule({
  declarations: [ReviewComponent, ReviewCardComponent, ReviewCardItemComponent],
  exports: [ReviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureReviewsModule { }
