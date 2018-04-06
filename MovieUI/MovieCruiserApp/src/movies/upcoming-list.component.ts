import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-list.component.html'
})
export class UpcomingListComponent implements OnInit {
  pageTitle: string = 'Upcoming Movie List';
  imageWidth: number = 80;
  imageMargin: number = 2;
  showImage: boolean = true;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: IMovie[];
  movies: IMovie[] = [];

  constructor(private _movieService: MovieService) {

  }

  performFilter(filterBy: string): IMovie[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.movies.filter((movie: IMovie) =>
            movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  recommendMovie(event,index,selectedMovie) : void {
        let text = event.target.outerText;
        let currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this._movieService.recommendMovies(selectedMovie).subscribe(
                data =>{
                 event.target.innerHTML = currVal;
                   }
             );
       }

  ngOnInit(): void {
      this._movieService.getUpcomingMovies()
              .subscribe(movies => {
                  this.movies = movies.results;
                  this.filteredMovies = this.movies;
              },
                  error => this.errorMessage = <any>error);
  }
}
