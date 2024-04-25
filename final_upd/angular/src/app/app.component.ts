import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NgIf} from "@angular/common";
import {MaintabComponent} from "./maintab/maintab.component";
import {FootermboxComponent} from "./footermbox/footermbox.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DataService} from "./data.service";
import {Albums, Author, Songs} from "./models";
import {AlbumsComponent} from "./albums/albums.component";
import {InoutComponent} from "./inout/inout.component";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {QueryService} from "./query.service";
import {AuthorsComponent} from "./authors/authors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgIf, MaintabComponent, FootermboxComponent, SearchtabComponent, RouterLink, NgxAudioPlayerModule, HttpClientModule, AlbumsComponent, InoutComponent, FormsModule, AuthorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  songlist!: Songs[]
  albums!: Albums[]
  authors!: Author[]
  newlist : Songs
  userData:any
  loaded=false

  logInfo:any = {
    'last10':[]
  }

    constructor(private dataService:DataService,
  private queryService: QueryService,
  private formBuilder : FormBuilder,
  private http: HttpClient,
  private router:Router
                ) {
    this.newlist = {
      id : 0,
      img : "",
      name : "",
      author:'',
      link : "",
      duration:1,
      album:1,
      authorId:0
    }
  }
  tempLast10: Songs[]=[{
    id : 0,
    img : "",
    name : "",
    author:'',
    link : "",
    duration:1,
    album:1,
    authorId:0
  }]
  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/api/user", {withCredentials:true}).subscribe(
      res => {
        this.logInfo = res;
        console.log(this.logInfo['last10'])
        let lastIds:[number]=this.logInfo['last10']
        lastIds.forEach(i => this.tempLast10.push(this.searchById(i)[0]))
        console.log(this.tempLast10)

        this.loggedIn = true
      },
      res => {
        this.logInfo = {};
        this.loggedIn = false
        console.log(res)
      }
    );

    this.getSongs()
    this.getAuthors()
    this.getAlbums()
    console.log(this.songlist)
  }

  getSongs(){
    this.dataService.getSongs().subscribe(album=>{
      this.loaded=true
      this.assets=album
    });
  }

  getAlbums(){
    this.dataService.getAlbums().subscribe(album=>{
      this.albums= album
      console.log(this.albums)
      console.log("aaaa")
    });
  }

  getAuthors(){
    this.dataService.getAuthors().subscribe(authorlist=>{
      this.authors=authorlist
      console.log(this.authors)
    })
  }

  assets:Songs[]=[]



  searchById(id: number): any {
    return this.assets.filter(item => item.id === id);
  }

  whichTab = "main"
  title = 'angular';
  curId = 0;
  receiver(receivedFromChild:any){
    this.whichTab = receivedFromChild;

  }

  getUserData(receivedFromChild:any){
    this.userData = receivedFromChild
    if(this.userData==undefined){
      this.whichTab=""
    }
    console.log(this.userData)
  }

  recieveId(receivedFromChild:any){
     this.curId = receivedFromChild
    console.log("passed the id " + this.curId)
  }

  // --------------------------------------------------------------

  registername!: String;
  registermail!: String;
  registerpassword!: String;
  @Output() sender = new EventEmitter();

  loggedIn = false;


  toLogin = false

  loginmail!: String;
  loginpassword!: String;

  form!:FormGroup;




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
    this.queryService.login(JSON.stringify(vl)).subscribe(() => this.loggedIn=true)
  }

  logout(){
    this.http.post('http://127.0.0.1:8000/api/logout', {}, {withCredentials:true})
      .subscribe(()=>
        this.loggedIn = false)
  }


}
