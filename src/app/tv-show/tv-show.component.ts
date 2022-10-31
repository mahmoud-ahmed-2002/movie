import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../tv-show.service';
import { tvShow } from '../result';


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  tvshowData: tvShow[] = []
  imgPath:string='https://image.tmdb.org/t/p/w500';
  constructor(private _TvShowService: TvShowService) {
    _TvShowService.getTvShow().subscribe((data) => {
      this.tvshowData = data.results
    })
  }

  ngOnInit(): void {
  }

}
