import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatFavoritesService {

  api_key = environment.api_key

  user = 'user123'

  headers = new HttpHeaders({
    "content-type":"application/json",
    'x-api-key': `${this.api_key}`
  })

  options = { headers: this.headers }

  

  constructor(private http: HttpClient) { }

  getFavorites():Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/favourites?limit=20&sub_id=${this.user}`,this.options)
  }

  deleteFavorites(favoriteId:number):Observable<any>{
    return this.http.delete(`https://api.thecatapi.com/v1/favourites/${favoriteId}`,this.options)
  }
}
