import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NgIf} from "@angular/common";
import {MaintabComponent} from "./maintab/maintab.component";
import {FootermboxComponent} from "./footermbox/footermbox.component";
import {SearchtabComponent} from "./searchtab/searchtab.component";
import {NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgIf, MaintabComponent, FootermboxComponent, SearchtabComponent, RouterLink, NgxAudioPlayerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  assets=[
    {
      id : 1,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "New N3on",
      'author' : "Playboi Carti",
    },
    {
      id : 2,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "Cancun",
      'author' : "Playboi Carti",

    },
    {
      id : 3,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "Vamp Anthem",
      'author' : "Playboi Carti",

    },
    {
      id : 4,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "Vamp Anthem",
      'author' : "Playboi Carti",

    },
    {
      id: 5,
      'img' : "https://wknc.org/wp-content/uploads/2021/01/41rn5srbd3r41.jpg",
      'name' : "Vamp Anthem",
      'author' : "Playboi Carti",

    },
  ]

  searchById(id: number): any {
    return this.assets.filter(item => item.id === id);
  }

  whichTab = "main"
  title = 'angular';
  receiver(receivedFromChild:any){
    this.whichTab = receivedFromChild;
  }
}
