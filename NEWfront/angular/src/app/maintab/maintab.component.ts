import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

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

}
