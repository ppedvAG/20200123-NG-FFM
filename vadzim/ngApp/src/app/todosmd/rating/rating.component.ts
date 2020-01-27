import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: []
})
export class RatingComponent implements OnInit {
  @Input() starsamount: number;
  starstring: string;

  constructor() { }

  ngOnInit() {
    this.starstring = '*'.repeat(this.starsamount);
  }

}
