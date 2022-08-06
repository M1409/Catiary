import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatInfoService {

  constructor(private http: HttpClient) { }

  getCatInfo(id:string | null):Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds/search?q=${id}`)
  }

  getCatImage(id:string | null):Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=5`)
  }

}
