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
import {Songs} from "./models";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgIf, MaintabComponent, FootermboxComponent, SearchtabComponent, RouterLink, NgxAudioPlayerModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  songlist!: Songs[]
  newlist : Songs
  loaded=false
    constructor(private dataService:DataService) {
    this.newlist = {
      id : 0,
      img : "",
      name : "",
      author:'',
      link : "",
      duration:1
    }
  }
  ngOnInit(): void {
    this.getSongs()
    console.log(this.songlist)
  }

  getSongs(){
    this.dataService.getAlbums().subscribe(album=>{
      this.loaded=true
      this.assets=album
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

  changeTrack(id: number): void {
    this.curId = id;
    console.log('Changed to track with ID:', id);
  }

}
