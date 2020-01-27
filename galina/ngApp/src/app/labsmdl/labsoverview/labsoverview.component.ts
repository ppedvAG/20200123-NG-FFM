import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-labsoverview",
  templateUrl: "./labsoverview.component.html",
  styles: []
})
export class LabsoverviewComponent implements OnInit {
  startMessage: string;
  timerMessage: string;
  timeAbgelaufen: string;

  constructor() {}

  ngOnInit() {}

  handlerStart() {
    this.startMessage = "Timer started";
  }

  handlerTick(seconds: number) {
    this.timerMessage = `Remainig time ${seconds}`;
  }

  handlerTimeAbgelaufen(message: string) {
    this.timeAbgelaufen = message;
  }
}
