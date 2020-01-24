import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pwconfirm',
  templateUrl: './pwconfirm.component.html',
  styleUrls: ['./pwconfirm.component.css']
})
export class PwconfirmComponent implements OnInit, OnChanges {
  tsMyForm: any;
  modelBinded: string = 'anfangszeichenkette';

  constructor() { }

  // ??? reagiert nicht auf die Änderungen von input-Feld z.B.
  ngOnChanges() {
    console.log('this.modelBinded :', this.modelBinded);
  }

  ngOnInit() {
    console.log('tsMyForm :', this.tsMyForm);
  }

  handleChange(){
    console.log('this.modelBinded :', this.modelBinded);
  }
}
