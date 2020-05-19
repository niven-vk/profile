import { Component, OnInit } from '@angular/core';
import { SidenavService } from './shared/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [SideNavService]
})
export class AppComponent {
  title: string = "Dashboard";      

  constructor(private sideNavService: SidenavService) {
    this.sideNavService.logSomeMessage("Hi from AppComponent !")
  }

  toggleSidenav() {
    this.sideNavService.toggle();
  }
}
