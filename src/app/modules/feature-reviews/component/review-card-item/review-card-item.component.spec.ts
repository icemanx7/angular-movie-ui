import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReviewCardItemComponent } from './review-card-item.component';

describe('ReviewCardItemComponent', () => {
  let component: ReviewCardItemComponent;
  let fixture: ComponentFixture<ReviewCardItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
