import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-dir',
  outputs: [ 'bankNameChange' ],
  template: `
    <input (input)="bankNameChange.emit($event.target.value)">
  `,
  styles: []
})
export class ChildDirComponent implements OnInit {
  bankNameChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
