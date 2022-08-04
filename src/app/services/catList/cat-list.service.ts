import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatListService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10')

  }
}
