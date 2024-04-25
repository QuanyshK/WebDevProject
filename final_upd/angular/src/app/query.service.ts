import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {routes} from "./app.routes";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  sendDataToDjango(value: any) {
    const url = 'http://127.0.0.1:8000/searchquery/';
    this.http.post(url, {data: value}).subscribe(response => {
      console.log('Response from Django:', response);
    });
  }



  register(data: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Assuming you have the URL stored somewhere or hard-coded
    const url = 'http://127.0.0.1:8000/api/register';

    return this.http.post(url, data, { headers: headers })
      .subscribe({
        next: (response) => console.log('Registration successful', response),
        error: (error) => console.error('Error occurred:', error)
      });
  }

  login(data: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Assuming you have the URL stored somewhere or hard-coded
    const url = 'http://127.0.0.1:8000/api/login';

    return this.http.post(url, data, { headers: headers ,
      withCredentials:true} )
  }

}
