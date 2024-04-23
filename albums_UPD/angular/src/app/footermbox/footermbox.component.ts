import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {AudioPlayerComponent, NgxAudioPlayerModule, Track} from "@khajegan/ngx-audio-player";
import {StateService} from "../state.service";
import {AudioPlayerService} from "@khajegan/ngx-audio-player/lib/service/audio-player-service/audio-player.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-footermbox',
  standalone: true,
  imports: [
    NgIf,
    NgxAudioPlayerModule,
    HttpClientModule
  ],
  templateUrl: './footermbox.component.html',
  styleUrl: './footermbox.component.css'
})
export class FootermboxComponent{
  @Input() assets: any[] = [];
  @Input() currentId: number = 0

  savedId=0
  check(){
    console.log(this.currentId)
  }

  @Input() childFunction: Function = () => {};

  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisablePositionSlider = false;
  msaapDisplayDuration = true;
  disablePositionSlider = false;

  msaapPlaylist: Track[] = [
  ];

  emp: Track[] = [
  ];

  foolplay: Track[] = [
  ];


  endBehaviour(currid:number){
    console.log(currid)
    let album = this.childFunction(currid)[0].album
    console.log(album)
    let Cid = this.childFunction(currid)[0].id
    let from = this.assets.filter(alb => alb.album==album)
    from = from.sort()
    console.log(from)
    for(let a of from){
      if(a.id>Cid){
        this.changeTrack(a.id)
        console.log(Cid)
        console.log(a.id)
        return;
      }
    }
    this.changeTrack(from[0].id)
    console.log(from[0])
  }
  ifExists(ia:number){

    return this.childFunction(ia)[0] != undefined;
  }

  changeTrack(io:number){
    if(this.savedId==this.currentId){
      return;
    }else{
      this.savedId=this.currentId
    }

    if(this.assets.find(a=>a.id==io)==undefined){

      this.msaapPlaylist = this.emp;
    }

    let aa = {
      title: 'placeholder',
      link: '',
      artist: 'placeholder',
      duration: 0,
      mediaType : 'stream'
    }

    aa["link"] = this.currentLink(io);
    aa["duration"] = this.currentDuration(io);

    this.msaapPlaylist.push(aa)
    if(this.msaapPlaylist.length>1) {
      this.waitForElm('.skip-next').then((element: any) => {
        console.log('Element is ready');
        element.click();
      });
    }


    console.log("we hav " + this.msaapPlaylist.length + "objs")
    console.log("ves")
    return ""
  }
  currentImg(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['img'];
  }

  currentLink(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['link'];
  }

  currentDuration(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['duration'];
  }

  currentName(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['name'];
  }

  currentAuth(ia:number){
    let ao = this.childFunction(ia)
    return ao[0]['author'];
  }

  waitForElm(selector:any) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }
      });

      // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
}
