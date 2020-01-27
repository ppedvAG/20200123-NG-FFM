import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ratting",
  templateUrl: "./ratting.component.html",
  styles: []
})
export class RattingComponent implements OnInit {
  Stern = "*";
  @Input() AnzahlSterne: 1;
  constructor() {}

  ngOnInit() {
    this.Stern = this.Stern.repeat(this.AnzahlSterne);
  }
}
