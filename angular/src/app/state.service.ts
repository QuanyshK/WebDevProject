import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public currentId=1
  public gotChanged = false;
  constructor() { }
}
