import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Movies, Movie } from '../../models/movies.models';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Movie> = new MatTableDataSource();

  @Input()
  set movieList(movies: Movie[]) {
    console.log('THE LIST OF MOVIES: ', movies)
    this.dataSource.data = movies;
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns = [
    'title',
    'year',
  ];

  constructor() { }

  ngOnInit() {
  }

}
