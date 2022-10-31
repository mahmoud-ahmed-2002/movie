import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Result } from '../result';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

moviesData:Result[]=[];
imgPath:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MovieService:MovieService) {
    _MovieService.getMovies().subscribe((data)=>{
      this.moviesData =data.results;
    })
   }

  ngOnInit(): void {
  }

}
