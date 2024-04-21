import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Songs} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get<Songs[]>(`http://127.0.0.1:8000/songinfo/`)
  }
  getAlbumsbyId(id:number):Observable<Songs>{
    return this.http.get<Songs>(`http://127.0.0.1:8000/songinfo/${id}/`);
  }
}
