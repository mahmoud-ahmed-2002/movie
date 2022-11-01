import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SearchService {

  constructor(private _HttpClient: HttpClient) { }

  getSearch(query:string=""): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=fdbf25e22fb4b9c4e42746dd6346b0f2&language=en-US&query=${query}&page=1&include_adult=false`)
  }
}