import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Movies, Movie } from '../../models/movies.models';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = [
    'title',
    'year',
  ];

  dataSource: MatTableDataSource<Movie> = new MatTableDataSource();

  @Input()
  set movieList(movies: Movie[]) {
    this.dataSource.data = movies;
    this.dataSource.paginator = this.paginator;
  }

  @Output()
  selectedMovie = new EventEmitter<Movie>();

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void { }

  clickRow(movie: Movie): void {
    this.selectedMovie.emit(movie);
  }

}
