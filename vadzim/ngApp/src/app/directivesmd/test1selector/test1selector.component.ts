import { Component, OnInit } from '@angular/core';
import { Bigmaker } from '../bigmaker';

@Component({
  selector: 'makeBig',
  viewProviders: [ Bigmaker],
  templateUrl: './test1selector.component.html',
  styles: []
})
export class Test1selectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
