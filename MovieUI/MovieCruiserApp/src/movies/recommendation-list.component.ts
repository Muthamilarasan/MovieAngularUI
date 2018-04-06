// import { Component, OnInit } from '@angular/core';

// import { IMovie } from './movie';
// import {Movie} from './movie-cruiser';
// import { MovieService } from './movie.service';

// @Component({
//   templateUrl: './movie-list.component.html'
// })
// export class RecommendedListComponent implements OnInit {
//   pageTitle: string = 'Recommended Movie List';
//   imageWidth: number = 80;
//   imageMargin: number = 2;
//   showImage: boolean = true;
//   errorMessage: string;

//   _listFilter: string;
//   get listFilter(): string {
//       return this._listFilter;
//   }
//   set listFilter(value: string) {
//       this._listFilter = value;
//       this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movieCruisers;
//   }

//   filteredMovies: Movie[];
//   movies: IMovie[] = [];
//   movieCruisers:Movie[]=[];

//   constructor(private _movieService: MovieService) {

//   }

//   performFilter(filterBy: string): Movie[] {
//       filterBy = filterBy.toLocaleLowerCase();
//       return this.movieCruisers.filter((movieCruiser: Movie) =>
//       movieCruiser.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
//   }

//   toggleImage(): void {
//       this.showImage = !this.showImage;
//   }


//    recommendMovie(event,index,selectedMovie) : void {
//       let text = event.target.outerText;
//       let currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
//       this._movieService.recommendMovies(selectedMovie).subscribe(
//               data =>{
//                event.target.innerHTML = currVal;
//                this.initRecommendRequest();
//                  }
//            );
//      }

//     initRecommendRequest() : void {
//     this._movieService.getRecommendedMovies()
//                   .subscribe(movieCruisers => {
//                       this.movieCruisers = movieCruisers.recommendedResult;
//                       this.filteredMovies = this.movieCruisers;
//                   },
//                       error => this.errorMessage = <any>error);
//               }

//   ngOnInit(): void {
//       this.initRecommendRequest();
//   }
// }
