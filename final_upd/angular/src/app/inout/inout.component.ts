import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QueryService} from "../query.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-inout',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.css'
})
export class InoutComponent implements OnInit{
  registername!: String;
  registermail!: String;
  registerpassword!: String;
  @Output() sender = new EventEmitter();
  logInfo:any;

  loggedIn = false;



  toLogin = false

  loginmail!: String;
  loginpassword!: String;

  form!:FormGroup;

  constructor(private queryService: QueryService,
              private formBuilder : FormBuilder,
              private http: HttpClient,
              private router:Router) {

  }

  ngOnInit(){
    this.http.get("http://127.0.0.1:8000/api/user", {withCredentials:true}).subscribe(
      res => {
        this.logInfo = res;
        this.sender.emit(res)
        this.toLogin=false
        console.log(res)
      },
      res => {
        this.logInfo = {};
        console.log(res)
      }
    );
  }

  registerButton(){
    let vl = {
      "name" : this.registername,
      "email" : this.registermail,
      "password" : this.registerpassword
    }
    console.log(JSON.stringify(vl))
    this.queryService.register(JSON.stringify(vl))
  }

  loginButton(){
    let vl = {
      "email" : this.loginmail,
      "password" : this.loginpassword
    }
    console.log(JSON.stringify(vl))
    this.queryService.login(JSON.stringify(vl))
  }

  logout(){
    this.http.post('http://127.0.0.1:8000/api/logout', {}, {withCredentials:true})
      .subscribe(()=>
      this.loggedIn = false)
  }

}
