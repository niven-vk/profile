import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidenavService {

  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public isOpened: boolean = false;

  public toggle() {
    this.isOpened=!this.isOpened;
  } 

  logSomeMessage(msg: any) { 
		console.log("Message from consumer is : " + msg); 
	}
}
