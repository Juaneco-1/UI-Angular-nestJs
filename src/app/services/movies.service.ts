import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  _url='/movies';
  constructor(private http:HttpClient) {

   }

   getMovie(id:string){
    return this.http.get<any>(this._url+'/'+id);
   }

   getMovies(){
    return this.http.get<any>(this._url);
   }

   addMovies(data:any){
    return this.http.post(this._url,data);
   }

   modifyMovie(id:any,data:any){

    return this.http.put(this._url+'/'+id,data);
   }

   deleteMovie(id:any){

   return this.http.delete(this._url+'/'+id);
  }
}
