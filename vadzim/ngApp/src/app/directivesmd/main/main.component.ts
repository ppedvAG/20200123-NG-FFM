import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    {{ bankName }} <app-child-dir (bankNameChange)="onBankNameChange($event)"></app-child-dir>
  `,
  styles: []
})
export class MainComponent implements OnInit {
  bankName: string;

  constructor() { }

  ngOnInit() {
  }

  onBankNameChange(bankName: string) {
    this.bankName = bankName;
  }

}
