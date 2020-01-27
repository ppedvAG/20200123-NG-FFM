import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dice",
  templateUrl: "./dice.component.html",
  styleUrls: ["./dice.component.css"]
})
export class DiceComponent implements OnInit {
  Zufallszahl: number;

  constructor() {
    this.Zufallszahl = this.getRandom(1, 7);
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getFontSize(z): number {
    z === 3 || z === 4 || z === 6 ? (z = z * 10) : (z = 12);
    return z;
  }

  ngOnInit() {}
}
