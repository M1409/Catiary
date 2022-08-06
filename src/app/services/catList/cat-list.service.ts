import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { postFavorites } from 'src/app/Interfaces/Cat';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CatListService {

  api_key = environment.api_key

  headers = new HttpHeaders({
    'x-api-key': `${this.api_key}`
  })

  options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getDataBreed():Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds?limit=30`)
  }

  postFavorite(opost:postFavorites):Observable<any>{
    return this.http.post(`https://api.thecatapi.com/v1/favourites`,opost,this.options)
  }
}
