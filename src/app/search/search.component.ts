import { query } from '@angular/animations';
import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,OnChanges{

  catagories = new FormGroup({
    tvShow: new FormControl(true),
    movies: new FormControl(false),
    people: new FormControl(false),
  })

  valueSearch: string = ''
  getValue(event: any) {
    this.valueSearch =event.target.value
    this._SearchService.getSearch(this.valueSearch).subscribe((data) => {
      this.searchData = data.results
    });
  }

  
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  searchData: any[] = []
  constructor(private _SearchService: SearchService) {
   
  }

  ngOnInit(): void {
    // this._SearchService.getSearch("t").subscribe((data) => {
    //   this.searchData = data.results
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
  
  }
}
