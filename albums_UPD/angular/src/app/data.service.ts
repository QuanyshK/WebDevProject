import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Albums, Songs} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get<Songs[]>(`http://127.0.0.1:8000/songinfo/`)
  }

  getAlbums(){
    return this.http.get<Albums[]>(`http://127.0.0.1:8000/albuminfo/`)
  }
}
