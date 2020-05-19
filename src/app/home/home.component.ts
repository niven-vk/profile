import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../shared/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';


import { MatListModule } from '@angular/material/list';
import { ViewportScroller } from '@angular/common';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends DisplayComponent implements OnInit  {
  @ViewChild('sidenav') private sidenav2: MatSidenav;
  public opened: boolean;

  constructor(
    public sideNavService: SidenavService,
    private viewportScroller: ViewportScroller
  ) {
    super();
    this.sideNavService.logSomeMessage(this.sidenav2);
    this.opened = false;
  }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.opened = !this.opened;
    });

  }

  
}
