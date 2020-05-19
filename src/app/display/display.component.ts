import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollTo($elementId: any): void {
    $elementId.scrollIntoView({behavior: "smooth", block: "center", duration: 999999999})
  }
  
}
