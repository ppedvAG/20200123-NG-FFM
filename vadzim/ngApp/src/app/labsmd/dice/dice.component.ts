import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  zahl: number;

  constructor() {
    this.zahl = Math.ceil(Math.random() *6);
  }

  ngOnInit() {
  }

  getFontSize(z): number {
    // z === 3 || z === 4 ? z = z*10 : z = 16;
    return z * 10;
  }



}
