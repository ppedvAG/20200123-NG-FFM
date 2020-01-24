import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  size: number;
  isHome: boolean;
  text:string = "irgendwas";

  constructor() { }

  changeSize(a:number):void {
    this.size = a;
  }
  ngOnInit() {
  }

  away(): void {
    this.isHome=false;
  }
  home(): void {
    this.isHome=true;
  }

  getText() {
    return this.isHome ? 'Home' : 'Away';
  }
}
