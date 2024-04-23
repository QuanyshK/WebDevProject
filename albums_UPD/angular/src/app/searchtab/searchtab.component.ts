import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {QueryService} from "../query.service";
import {Songs} from "../models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-searchtab',
  standalone: true,
  imports: [HttpClientModule, NgForOf],
  templateUrl: './searchtab.component.html',
  styleUrl: './searchtab.component.css'
})
export class SearchtabComponent {
    filtered:Songs[] = [];
    @Input() assets: Songs[] = [];
    queryText = '';
    @Output() sendId = new EventEmitter();
    getQueryText(event:any){
      this.filtered = this.assets
      this.queryText = event.target.value
      this.filtered = this.filtered.filter(song=>song.name.toLowerCase().includes(this.queryText.toLowerCase()))
        if(this.filtered.length<=0){
            this.filtered=this.filtered.filter(song =>song.author.toLowerCase().includes(this.queryText.toLowerCase()))
        }
      console.log(this.queryText)
    }

  changeTrack(a:any){
    let id = a['id']
    this.sendId.emit(id)
    console.log("Track changed to" + id)
  }
}
