import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movies.models';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.scss']
})
export class MovieTemplateComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit(): void {
    console.log('Single Movie: ', this.movie)
  }

}
