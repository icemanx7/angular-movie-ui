import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Movies, Movie } from '../../models/movies.models';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<Movie> = new MatTableDataSource();

  @Input()
  set movieList(movies: Movie[]) {
    this.dataSource.data = movies;
    this.dataSource.paginator = this.paginator;
  }

  @Output()
  selectedMovie = new EventEmitter<Movie>();


  displayedColumns = [
    'title',
    'year',
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  ngOnInit() {
  }

  clickRow(movie: Movie): void {
    console.log('is this a movie type: ', movie);
    this.selectedMovie.emit(movie);
  }

}
