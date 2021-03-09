import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoaderReducers from '../../reducers';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


readonly shouldShowLoader$: Observable<boolean> = this.store.pipe(select(LoaderReducers.getShouldShowLoader))
readonly isLoading$: Observable<boolean> = this.store.pipe(select(LoaderReducers.getIsLoading))

  constructor(
    public store: Store<LoaderReducers.LoaderState>
  ) { }


  ngOnInit(): void {
  }

}
