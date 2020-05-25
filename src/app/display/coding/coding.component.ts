import { Component} from '@angular/core';
import { DisplayComponent } from '../display.component';
import { SidenavService } from 'src/app/shared/sidenav.service';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent extends DisplayComponent {

  constructor(public sidenavService: SidenavService) {
    super(sidenavService);
  }
}
