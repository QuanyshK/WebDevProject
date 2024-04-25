import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Albums, Songs} from "../models";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  @Input() assets: Songs[] = [];
  @Input() albums: Albums[] = [];
  @Output() sendId = new EventEmitter();
  songlist! : Songs[];
  state = 'list'
  currentAlbum !: Albums;
  toAlbum(a:any){
    this.currentAlbum = a
    this.state = 'album'
  }

  getAllSongs(alb:number){
    this.songlist = this.assets.filter(song=> song.album == alb)
    return this.songlist;
  }

  goback(){
    this.state = 'list'
  }

  changeTrack(a:any){
    let id = a['id']
    this.sendId.emit(id)
    console.log("Track changed to" + id)
  }

  getDetails(a:any){
    let s = ''
    if(a.duration>60){
      s+=Math.trunc(a.duration/60) + " hrs "
      s+=(a.duration%60) + " min"
    }else{
      s+=(a.duration%60) + " min"
    }
    s+= ' · '

    s+= a.songamount + " songs"
    s+= ' · '
    s+= a.year
    return s;
  }


}
