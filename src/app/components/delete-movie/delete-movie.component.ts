import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  idMovie:any;
  constructor(private route:ActivatedRoute,private router:Router,private movieService:MoviesService) { }

  ngOnInit(): void {
    this.idMovie=this.route.snapshot.paramMap.get("id");

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.movieService.deleteMovie(this.idMovie).subscribe(res=>{
          console.log(res)
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.router.navigate(['']);

      }
      this.router.navigate(['']);
    })




  }





}
