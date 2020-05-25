import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/sidenav.service';
import { DisplayComponent } from '../display.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent extends DisplayComponent {

  public styleOffset=2;
  constructor(public sidenavService: SidenavService) {
    super(sidenavService);
   }

}
