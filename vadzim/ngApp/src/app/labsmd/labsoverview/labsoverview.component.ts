import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labsoverview',
  templateUrl: './labsoverview.component.html',
  styles: []
})
export class LabsoverviewComponent implements OnInit {
  startMessage : string;
  timerMessage: string;
  endMessage: string;
  endMessageFromChild: string;

  constructor() { }

  ngOnInit() {
  }

  handleStart() {
    this.startMessage = "Time is started";
  }

  handleTick(seconds: number) {
    this.timerMessage = `Remaining time ${seconds}`;
    if (seconds === 0) {
      this.endMessage = 'Time is over';
    }
  }

  handleEnd(msg: string) {
    this.endMessageFromChild = msg;
  }


}
