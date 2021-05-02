import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const searchUrl="https://api.giphy.com/v1/gifs/search?"
const apiKey='api_key=6h6a8zF7pbj9KfizLGgHd47Fh35kTAwZ' 
const httpOptions = {
  headers: new HttpHeaders({
    api_key : "6h6a8zF7pbj9KfizLGgHd47Fh35kTAwZ"
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  searchGifsBasedOnText(txt){
    return this.http.get(searchUrl + apiKey+ '&q='+txt)
  }
}
