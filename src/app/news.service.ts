import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL=environment.apiUrl;
const API_KEY=environment.apiKey; 

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  curentArticle:any;
  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e150fbe962c44cb8ece9badd742a157');
  }
}
