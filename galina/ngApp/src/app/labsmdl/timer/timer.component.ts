import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() ticketEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() TimeAbgelaufenEvent: EventEmitter<string> = new EventEmitter<
    string
  >();

  remainingTime: number;
  // intervalId: NodeJS.Timer;
  intervalId: number;
  timerAbgelaufen: string;

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.startEvent.emit();
    this.remainingTime = this.seconds;
    // this.intervalId = window.setInterval(() => {
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      this.ticketEvent.emit(this.remainingTime);
      if (this.remainingTime === 0) {
        console.log(this.remainingTime);
        if (this.remainingTime === 0) {
          this.TimeAbgelaufenEvent.emit("Time abgelaufen");
        }
        console.log("this.intervalId :", this.intervalId);
        console.log("typeof this.intervalId :", typeof this.intervalId);
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}
