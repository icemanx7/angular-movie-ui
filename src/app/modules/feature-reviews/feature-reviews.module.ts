import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './view/review/review.component';
import { ReviewCardComponent } from './component/review-card/review-card.component';
import { ReviewCardItemComponent } from './component/review-card-item/review-card-item.component';



@NgModule({
  declarations: [ReviewComponent, ReviewCardComponent, ReviewCardItemComponent],
  exports: [ReviewComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureReviewsModule { }
