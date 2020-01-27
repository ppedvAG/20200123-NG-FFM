import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pwconfirmer',
  templateUrl: './pwconfirmer.component.html',
  styleUrls: ['./pwconfirmer.component.css']
})
export class PwconfirmerComponent implements OnInit, OnChanges {
 tsMyForm: any;
  modelBinded: string = 'anfangszeichenkette';

  constructor() { }

  ngOnInit() {
    console.log('tsMyForm :', this.tsMyForm);
    console.log('modelBinded :', this.modelBinded);
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('tsMyForm :', this.tsMyForm);
    console.log('modelBinded :', this.modelBinded);

    throw new Error("Method not implemented.");
  }

  handleChange() {
    console.log('this.modelBinded :', this.modelBinded);
  }

}
