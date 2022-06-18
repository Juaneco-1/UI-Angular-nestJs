import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ModifyMovieComponent } from './components/modify-movie/modify-movie.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';

const routes: Routes = [

  {path:'',component:MoviesComponent},
  {path:'addMovie',component:AddMovieComponent},
  {path:'modify/:id',component:ModifyMovieComponent},
  {path:'delete/:id',component:DeleteMovieComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
