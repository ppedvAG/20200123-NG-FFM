import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: []
})
export class TimerComponent implements OnInit {

  @Input() seconds: number;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
  remainingTime: number;
  intervalId: NodeJS.Timer;
  started: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.startEvent.emit();
    this.remainingTime=this.seconds;
    this.started=true;
    this.intervalId=setInterval(() => {
      this.remainingTime--;
      this.tickEvent.emit(this.remainingTime);
      if (this.remainingTime === 0) {
        clearInterval(this.intervalId);
        this.started = false;
        console.log('this.intervalId :', this.intervalId);
        console.log('this.intervalId :', typeof this.intervalId);
      }

    }, 1000);


  }

}
