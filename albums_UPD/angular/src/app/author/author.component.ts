import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Albums, Author, Songs} from "../models";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() assets: Songs[] = [];
  @Input() albums: Albums[] = [];
  @Input() authors:Author[]=[]
  @Output() sendId = new EventEmitter();
  songlist! : Songs[];
  albumlist!:Albums[];
  state = 'list'
  currentAlbum !: Albums;
  currentAuthor!:Author;

  toAutors(a:any){
    this.currentAuthor = a
    this.state = 'author'
  }

  getAllAlbums(){
    this.albumlist=this.albums.filter(album=>album.author==this.currentAuthor.name)
  }
  getAllSongs(alb:number){
    this.songlist = this.assets.filter(song=> song.album == alb)
    return this.songlist;
  }
  changeTrack(a:any){
    let id = a['id']
    this.sendId.emit(id)
    console.log("Track changed to" + id)
  }

  getDetails(a:any){
    let s = ''
    if(a.duration>60){
      s+=Math.trunc(a.duration/60) + "hrs"
      s+=(a.duration%60) + "min"
    }else{
      s+=(a.duration%60) + "min"
    }
    s+= ' · '

    s+= a.songamount + "songs"
    s+= ' · '
    s+= a.year
    return s;
  }
}
