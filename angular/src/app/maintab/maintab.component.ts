import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {StateService} from "../state.service";
import {HttpClientModule} from "@angular/common/http";
import {Songs} from "../models";

@Component({
  selector: 'app-maintab',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './maintab.component.html',
  styleUrl: './maintab.component.css'
})
export class MaintabComponent {
  @Input() assets: Songs[] = [];
  @Output() sendId = new EventEmitter();
  constructor(private service: StateService) {
  }

  changeTrack(a:any){
    let id = a['id']
    this.sendId.emit(id)
    console.log("Track changed to" + id)
  }

  pickTrack(a:any){
    this.service.currentId = a['id']
    this.service.gotChanged = true;
  }
}
