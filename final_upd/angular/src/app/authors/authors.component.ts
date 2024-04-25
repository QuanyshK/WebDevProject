import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Albums, Author, Songs} from "../models";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  @Input() assets: Songs[] = [];
  @Input() albums: Albums[] = [];
  @Input() authors:Author[]=[]
  @Output() sendId = new EventEmitter();
  songlist! : Songs[];
  albumlist!:Albums[];
  state = 'list'
  currentAlbum !: Albums;
  currentAuthor!:Author;




  changeState(newState:string){
    this.state=newState
  }



  toAutors(a:any){
    this.currentAuthor = a
    this.state = 'author'
  }
  toAlbum(a:any){
    this.currentAlbum = a
    this.state = 'album'

  }

  getAllAlbums(authorid:number){
    console.log(this.albums)
    this.albumlist=this.albums.filter(album=>album.authord==authorid)
    console.log(this.albumlist)
    return this.albumlist
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

  getDetailsAuthor(a:any){
    let s = ''
    s+=this.getAllAlbums(this.currentAuthor.id).length+" albums "
    s+= this.getAllSongCount(this.getAllAlbums(this.currentAuthor.id)) + " songs "
    s+= ' · '
    s+= a.listeningCount
    return s;
  }

  getAllSongCount(albumlist:Albums[]){
    let songamount =0
    for (const album of this.getAllAlbums(this.currentAuthor.id)) {
      songamount+=this.getAllSongs(album.id).length
    }
    return songamount
  }
  getDetailsAlbum(a:any){
    let s = ''
    s+= this.getAllSongs(this.currentAlbum.id).length + "songs"
    s+= ' · '
    s+= a.year
    s+=this.currentAuthor.name
    return s;
  }


}
