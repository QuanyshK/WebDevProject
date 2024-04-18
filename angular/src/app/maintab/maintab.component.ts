import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {StateService} from "../state.service";

@Component({
  selector: 'app-maintab',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './maintab.component.html',
  styleUrl: './maintab.component.css'
})
export class MaintabComponent {
  @Input() assets: any[] = [];
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
