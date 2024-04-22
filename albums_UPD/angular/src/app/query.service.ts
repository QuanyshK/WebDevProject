import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}

  sendDataToDjango(value: any) {
    const url = 'http://127.0.0.1:8000/searchquery/';
    this.http.post(url, { data: value }).subscribe(response => {
      console.log('Response from Django:', response);
    });
  }
}
