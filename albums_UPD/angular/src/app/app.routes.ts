import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {MaintabComponent} from "./maintab/maintab.component";
import {StartpageComponent} from "./startpage/startpage.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AuthorComponent} from "./author/author.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: MaintabComponent },
  { path: 'search', component: SearchtabComponent},
  { path: 'albums', component: AlbumsComponent},
  {path:'authors',component:AuthorComponent},
];
