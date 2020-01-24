import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: []
})
export class RatingComponent implements OnInit {

  star="*";
  @Input() count: number;

  constructor() { }

  ngOnInit() {

   this.star = this.star.repeat(this.count);

  }

}
