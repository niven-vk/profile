import { Component } from '@angular/core';
import { SidenavService } from './shared/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = "Dashboard";

  constructor(public sidenavService: SidenavService) {
    this.sidenavService.logSomeMessage("Hi from AppComponent !")
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
