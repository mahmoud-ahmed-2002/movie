import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  { path:"",redirectTo:"movies",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"movies",component:MoviesComponent},
  { path:"tv-show",component:TvShowComponent},
  { path:"Search",component:SearchComponent},
  { path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
