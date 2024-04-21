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


  assets:Songs[]=[
    {
      id : 1,
      'img' : "https://img.buzzfeed.com/buzzfeed-static/complex/images/ybibx59ihebwdhqyv7gq/wlr.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
      'name' : "New N3on",
      'author' : "Playboi Carti",
      'link' : 'https://www.dropbox.com/scl/fi/pp5yp08w63pb34icpkct7/Playboi-Carti-New-N3on.mp3?rlkey=71g7z14pobpp1qdi4t3nk0ch2&dl=1',
      'duration' : 116
    },
    {
      id : 2,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "Cancun",
      'author' : "Playboi Carti",
      'link' : 'https://www.dropbox.com/scl/fi/nlp7w5xfn8q5r2mz5j1sv/Playboi-Carti-Cancun.mp3?rlkey=xjxx36kse9efybr7xhzlp26tn&dl=1',
      'duration' : 142
    },
    {
      id : 3,
      'img' : "https://img.buzzfeed.com/buzzfeed-static/complex/images/ybibx59ihebwdhqyv7gq/wlr.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
      'name' : "Vamp Anthem",
      'author' : "Playboi Carti",
      'link' : 'https://www.dropbox.com/scl/fi/u11lll0wolzioxo6dhlln/Playboi-Carti-Vamp-Anthem-Official-Audio.mp3?rlkey=xshaclxhf8d7eii7b9cqa27au&dl=1',
      'duration' : 125
    },
    {
      id : 4,
      'img' : "https://img.buzzfeed.com/buzzfeed-static/complex/images/ybibx59ihebwdhqyv7gq/wlr.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
      'name' : "New Tank",
      'author' : "Playboi Carti",
      'link' : 'https://www.dropbox.com/scl/fi/o7fii9jobmmmb2skma9ee/Playboi-Carti-New-Tank-Official-Audio.mp3?rlkey=libps8ku12arde2twvcyryvm4&dl=1',
      'duration' : 90
    },
    {
      id : 5,
      'img' : "https://i1.sndcdn.com/artworks-mFszANGYblsfYsSu-dkuvLA-t500x500.jpg",
      'name' : "@ MEH",
      'author' : "Playboi Carti",
      'link' : 'https://www.dropbox.com/scl/fi/bznbt9i32w4oz7llbvsw2/Playboi-Carti-MEH-Official-Video.mp3?rlkey=c4ueoborr8314cbpc988uc55i&dl=1',
      'duration' : 168
    },
    {
      id : 6,
      'img' : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg/1200px-Yandhi_Cover_Art_%28Free_License%29.jpg",
      'name' : "80 Degrees (feat. Ant Clemons)",
      'author' : "Kanye West",
      'link' : 'https://www.dropbox.com/scl/fi/173l42ssz5cvqc1amsrun/80-degreesHurricane-feat.-Ant-Clemons-Yhandi.mp3?rlkey=3moj9wk3y98de6kg4h8vodlut&dl=1',
      'duration' : 265
    },
    {
      id : 7,
      'img' : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg/1200px-Yandhi_Cover_Art_%28Free_License%29.jpg",
      'name' : "New Body (feat. Nicki Minaj & Ty Dolla $ign)",
      'author' : "Kanye West",
      'link' : 'https://www.dropbox.com/scl/fi/zri80huyy1otiylklw09g/Kanye-West-Ty-Dolla-ign-New-Body-ft.-Nicki-Minaj-IG-Audio.mp3?rlkey=akgak001ptl47ewt9wcii0jiq&dl=1',
      'duration' : 225
    }

  ]




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
