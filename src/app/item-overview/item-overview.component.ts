import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {

  @ViewChild('wrapper') el: ElementRef;
  @Input() status: number = 1;
  @Input() title: string = "Default title";
  constructor() { }

  ngOnInit(): void {
  }

  getRowStatus(): string {
    return this.status % 2 == 1 ? "row" : "row-reverse";
  }

  getClass(): string {
    switch ((this.status + 3) % 5) {
      case 1:
        return "first";
      case 2:
        return "second";
      case 3:
        return "third";
      case 4:
        return "fourth";
      default:
        return "fifth";
    }
  }

  scrollIntoView() {
    this.el.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
