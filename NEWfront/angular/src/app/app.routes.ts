import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {MaintabComponent} from "./maintab/maintab.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: AppComponent },
  { path: 'search', component: SearchtabComponent}
];
