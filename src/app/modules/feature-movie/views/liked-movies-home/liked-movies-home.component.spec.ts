import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedMoviesHomeComponent } from './liked-movies-home.component';

describe('LikedMoviesHomeComponent', () => {
  let component: LikedMoviesHomeComponent;
  let fixture: ComponentFixture<LikedMoviesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedMoviesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedMoviesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
