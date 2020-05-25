import { Component} from '@angular/core';
import { SidenavService } from '../shared/sidenav.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  constructor(public sidenavService: SidenavService) {}

  public scrollTo(elementId: any): void {
    elementId.scrollIntoView({ behavior: "smooth", block: "center" });
  }

}
