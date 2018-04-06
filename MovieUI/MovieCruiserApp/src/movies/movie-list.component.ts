import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import {Movie} from './movie-cruiser';

@Component({
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  pageTitle: string = 'Movie List';
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
  movieCruiser={};
  disableButton=false;


  constructor(private _movieService: MovieService) {

  }

  onRatingClicked(message: string): void {
      this.pageTitle = 'Movie List: ' + message;
  }

  performFilter(filterBy: string): IMovie[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.movies.filter((movie: IMovie) =>
            movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

 recommendMovie(event,index,selectedMovie) : void {
       let text = event.target.outerText;
       this.disableButton=true;
       
       //let currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
       
       this.movieCruiser['id'] = selectedMovie.id;
       this.movieCruiser['name'] = selectedMovie.title;
       this.movieCruiser['posterPath'] = selectedMovie.poster_path;
       this.movieCruiser['releaseDate'] = selectedMovie.release_date;
       this.movieCruiser['voteCount'] = selectedMovie.vote_count;
       
       console.log("Movie Cruiser"+JSON.stringify(this.movieCruiser));
       
       this._movieService.recommendMovies(this.movieCruiser).subscribe(
               data =>{
              //  event.target.innerHTML = currVal;
                  }
            );
      }

  toggleImage(): void {
      this.showImage = !this.showImage;
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
