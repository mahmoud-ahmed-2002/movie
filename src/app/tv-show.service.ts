import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private _HttpClient: HttpClient) { }

  getTvShow():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=fdbf25e22fb4b9c4e42746dd6346b0f2')
  }
}
