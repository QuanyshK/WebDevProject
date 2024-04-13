import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  whichTab = "main"
  @Output() sender = new EventEmitter()
  tomain(){
    this.whichTab = 'main'
    this.sender.emit(this.whichTab)

  }
  tosearch(){
    this.whichTab = 'search'
    this.sender.emit(this.whichTab)
  }
}
