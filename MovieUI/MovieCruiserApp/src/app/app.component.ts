import { Component } from '@angular/core';
import { MovieListComponent } from 'movies/movie-list.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/movie']">Dashboard</a></li>
                    <li><a [routerLink]="['/trending']">Popular Movies</a></li>
                    <li><a [routerLink]="['/forthcoming']">UpComing Movies</a></li>
                    <li><a [routerLink]="['/recommended']">My Recommendations</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  title = 'app';
}
