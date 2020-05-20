import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/sidenav.service';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends DisplayComponent implements OnInit {
  public opened: boolean;

  constructor(
    public sideNavService: SidenavService) {
    super();
    this.opened = false;
  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.opened = !this.opened;
    });

  }
}
