import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DirectiveNormalizer } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modify-movie',
  templateUrl: './modify-movie.component.html',
  styleUrls: ['./modify-movie.component.css']
})
export class ModifyMovieComponent implements OnInit {

  id:any;
  movie:any;
  previousMovie:any;

  constructor(private movieService:MoviesService,private route:ActivatedRoute,private router:Router ) {





   }

    ngOnInit(){

      this.id=this.route.snapshot.paramMap.get('id');

      this.movieService.getMovie(this.id).subscribe(resultado=>{

        this.previousMovie=resultado;


    },
    error=>{
      console.log("Hay un error en consumir el JSON");}
    )
  }

  onSubmit(data:NgForm){

    const {title,director,year,imgurl} = data.value;
    this.movie={
      title,
      director,
      year,
      img:imgurl,
    }

        this.movieService.modifyMovie(this.id,this.movie).subscribe(res=>{
        console.log(res);
    });
    this.router.navigate(['']);
  }


}
