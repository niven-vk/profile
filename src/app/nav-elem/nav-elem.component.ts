import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-elem',
  templateUrl: './nav-elem.component.html',
  styleUrls: ['./nav-elem.component.scss']
})
export class NavElemComponent implements OnInit {

  @Input() name: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
