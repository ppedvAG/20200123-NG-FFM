import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: []
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() endEvent: EventEmitter<string> = new EventEmitter<string>();

  remainingTime: number;
  intervalId: NodeJS.Timer; // ist später trotzdem einfach nur number. warum ???
  // started: boolean;
  endMessage: string;

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.startEvent.emit();
    this.remainingTime = this.seconds;
    // this.started = true;
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      this.tickEvent.emit(this.remainingTime);
      if (this.remainingTime === 0) {
        this.endMessage = 'Message from Child: time is over';
        this.endEvent.emit(this.endMessage);
        // ??? intervalId ist bisher nirgendwo initialisiert.
        console.log('this.intervalId :', this.intervalId);
        console.log('typeof this.intervalId :', typeof this.intervalId);
        clearInterval(this.intervalId);
        // this.started = false;
      }
    }, 1000);
    /* console.log("remainingTime: ", this.remainingTime); // hat den Anfangswert
    if (this.remainingTime === 0) {
      this.endMessage = 'Message from Child: time is over';
      this.endEvent.emit(this.endMessage);
    } */

  }

}
