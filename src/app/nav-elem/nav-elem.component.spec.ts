import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavElemComponent } from './nav-elem.component';

describe('NavElemComponent', () => {
  let component: NavElemComponent;
  let fixture: ComponentFixture<NavElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
