import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {MaintabComponent} from "./maintab/maintab.component";
import {StartpageComponent} from "./startpage/startpage.component";
import {AlbumsComponent} from "./albums/albums.component";
import {InoutComponent} from "./inout/inout.component";
import {AuthorsComponent} from "./authors/authors.component";

export const routes: Routes = [
  { path: 'home', component: MaintabComponent },
  { path: 'search', component: SearchtabComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'inout', component: InoutComponent},
  { path: 'authors', component: AuthorsComponent},
];
