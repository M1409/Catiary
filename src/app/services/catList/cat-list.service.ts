import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatListService {

  api_key = 'c1bef246-dc1f-4907-b076-4805277a65f1'

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds?limit=30`)
  }
}
