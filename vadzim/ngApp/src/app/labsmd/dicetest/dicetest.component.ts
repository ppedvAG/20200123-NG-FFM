import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicetest',
  templateUrl: './dicetest.component.html',
  styles: []
})
export class DicetestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showDice() {
    return Math.ceil(Math.random()*6);
  }

}
