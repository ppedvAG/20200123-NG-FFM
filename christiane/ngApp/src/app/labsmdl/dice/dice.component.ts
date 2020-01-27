import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  diceValue: number;

  constructor() {
    this.diceValue  = Math.floor(Math.random() * 6);

  }

  ngOnInit() {
  }

  getDiceValue(d: number):number {
    d === 3 || d === 4 ? d = d * 10 : d = 16;
    return d;
  }

/*   showDice() {
   return this.diceValue;
  } */

}
