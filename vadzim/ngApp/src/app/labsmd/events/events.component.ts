import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: []
})
export class EventsComponent implements OnInit {
  // @Input() size: number;
  size: number;
  isHome: boolean;
  text: string = "home/away";


  constructor() { }

  ngOnInit() {
  }

  changeSize(a: number): void {
    this.size = a;
  }

  home(){
    this.isHome = true;
  }

  away(){
    this.isHome = false;
  }

  getText() {
    return this.isHome ? 'Home' : 'Away';
  }

}
