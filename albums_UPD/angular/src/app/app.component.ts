import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NgIf} from "@angular/common";
import {MaintabComponent} from "./maintab/maintab.component";
import {FootermboxComponent} from "./footermbox/footermbox.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";
import { HttpClientModule } from '@angular/common/http';
import {DataService} from "./data.service";
import {Albums, Songs} from "./models";
import {AlbumsComponent} from "./albums/albums.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgIf, MaintabComponent, FootermboxComponent, SearchtabComponent, RouterLink, NgxAudioPlayerModule, HttpClientModule, AlbumsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  songlist!: Songs[]
  albums!: Albums[]
  newlist : Songs
  loaded=false
    constructor(private dataService:DataService) {
    this.newlist = {
      id : 0,
      img : "",
      name : "",
      author:'',
      link : "",
      duration:1,
      album:1
    }
  }
  ngOnInit(): void {
    this.getSongs()
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
    });
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

  recieveId(receivedFromChild:any){
     this.curId = receivedFromChild
    console.log("passed the id " + this.curId)
  }

}
