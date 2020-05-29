import { Component } from '@angular/core';
import { SidenavService } from './shared/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = "Dashboard";

  constructor(public sidenavService: SidenavService, public router: Router) {
    this.sidenavService.logSomeMessage("Hi from AppComponent !")
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
