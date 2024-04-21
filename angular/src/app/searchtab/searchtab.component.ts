import { Component } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-searchtab',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './searchtab.component.html',
  styleUrl: './searchtab.component.css'
})
export class SearchtabComponent {

}
