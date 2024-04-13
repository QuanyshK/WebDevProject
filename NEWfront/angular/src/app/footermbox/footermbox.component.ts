import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {NgxAudioPlayerModule, Track} from "@khajegan/ngx-audio-player";

@Component({
  selector: 'app-footermbox',
  standalone: true,
  imports: [
    NgIf,
    NgxAudioPlayerModule
  ],
  templateUrl: './footermbox.component.html',
  styleUrl: './footermbox.component.css'
})
export class FootermboxComponent {
  @Input() assets: any[] = [];
  currentId: number = 0;
  @Input() childFunction: Function = () => {};

  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [];
  msaapDisplayVolumeControls = false;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  msaapPlaylist: Track[] = [
    {
      title: 'New N3on',
      link: 'https://www.dropbox.com/scl/fi/pp5yp08w63pb34icpkct7/Playboi-Carti-New-N3on.mp3?rlkey=71g7z14pobpp1qdi4t3nk0ch2&dl=1',
      artist: 'Playboi Carti',
      duration: 116,
    }
  ];


  ifExists(ia:number){
    return this.childFunction(ia)[0] != undefined;
  }

  currentImg(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['img'];
  }

  currentName(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['name'];
  }

  currentAuth(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['author'];
  }

}
