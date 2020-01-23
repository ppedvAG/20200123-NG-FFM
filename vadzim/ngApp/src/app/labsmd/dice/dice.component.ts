import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styles: []
})
export class DiceComponent implements OnInit {
  zahl: number;

  constructor() {
    this.zahl = Math.ceil(Math.random() *6);
  }

  ngOnInit() {
  }



}
