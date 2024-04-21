import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Songs} from "../models";
import {FormsModule} from "@angular/forms";
import {MusicService} from "../musicSearchService";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MaintabComponent} from "../maintab/maintab.component";

@Component({
  selector: 'app-searchtab',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgForOf, AsyncPipe, NgIf],
  templateUrl: './searchtab.component.html',
  styleUrl: './searchtab.component.css'
})
export class SearchtabComponent {
  searchQuery: string = '';
  filteredMusic: Songs[]=[];
  @Output() sendId = new EventEmitter();
  @Input() assets!: Songs[];

  //constructor(private musicService: MusicService) {
   // this.filteredMusic = this.musicService.getAllMusic();
  //}


  onSearchChange(event: Event) {
    if (event instanceof InputEvent) {
      const searchTerm = (event.target as HTMLInputElement).value;
      this.filteredMusic = this.assets.filter(song =>
          song.name.toLowerCase().startsWith(searchTerm.toLowerCase())||
          song.author.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }
  }
  changeTrack(a:any){
    let id = a['id']
    this.sendId.emit(id)
    console.log("Track changed to" + id)
  }
}
