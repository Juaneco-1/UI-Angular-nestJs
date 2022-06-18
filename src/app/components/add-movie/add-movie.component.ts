import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService:MoviesService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){



    const movie={
      title:data.value.title,
      year:data.value.year,
      director:data.value.director,
      img:data.value.imgurl
    }

    console.log(movie)
    this.movieService.addMovies(movie).subscribe(res=>{
      console.log(res);
    });

    this.route.navigate(['']);




  }

}
