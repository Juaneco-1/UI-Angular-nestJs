import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies :Array<any>=[];
  constructor(private movieService:MoviesService) {

    this.movieService.getMovies().subscribe((res:any)=>{
      //console.log(res);
      this.movies=res;
      //console.log(this.movies);

    });

  }

  ngOnInit(): void {
  }





}
