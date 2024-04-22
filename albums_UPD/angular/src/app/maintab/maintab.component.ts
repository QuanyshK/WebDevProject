import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {StateService} from "../state.service";
import {HttpClientModule} from "@angular/common/http";
import {Songs} from "../models";

@Component({
  selector: 'app-maintab',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    NgClass,
    NgIf
  ],
  templateUrl: './maintab.component.html',
  styleUrl: './maintab.component.css'
})
export class MaintabComponent {
  mlist_now = 'mlist_box_nonactive'
  expandState = 0
  @Input() assets: Songs[] = [];
  beginPr! : [0, 0, 5, 2]
  showmore_less = "Show more"
  prlist=  [this.assets.slice(0,5),this.assets.slice(5,10),this.assets.slice(2,7)]
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

  toggleClass() {
    this.mlist_now = this.mlist_now === 'mlist_box_nonactive' ? 'mlist_box_active' : 'mlist_box_nonactive';
  }

  expand(a:number){
    if(this.expandState==0){
      this.expandState = a;
      this.showmore_less = "Show less"
    }else{
      this.expandState=0
      this.showmore_less = "Show more"
    }
    this.toggleClass()
  }
}
