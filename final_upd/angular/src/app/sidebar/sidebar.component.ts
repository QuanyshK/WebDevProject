import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {StateService} from "../state.service";
import {HttpClientModule} from "@angular/common/http";
import {InoutComponent} from "../inout/inout.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    HttpClientModule,
    InoutComponent
  ],
  providers: [StateService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  statusio:boolean = false
  constructor(private router : Router) {
  }
  whichTab = "main"
  @Output() sender = new EventEmitter()

  gotomain(){
    this.router.navigate(['/main'])
  }

  gotosrch(){
    this.router.navigate(['/search'])
  }
  tomain(){
    this.whichTab = 'main'
    this.sender.emit(this.whichTab)
  }
  tosearch(){
    this.whichTab = 'search'
    this.sender.emit(this.whichTab)
  }

  toalbums(){
    this.whichTab = 'albums'
    this.sender.emit(this.whichTab)
  }

  toauths(){
    this.whichTab = 'authors'
    this.sender.emit(this.whichTab)
  }

  toinout(){
    this.statusio = true
  }
}
