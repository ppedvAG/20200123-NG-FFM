import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  @Input() size: number;
  isHome: boolean;
  text: string;

  constructor() {}

  ngOnInit() {
    this.text = "Home";
    this.isHome = true;
  }

  changeSize(value): void {
    // console.log(value);
    this.size = value;
  }

  changeText(event) {
    console.log(event.target);
    if (this.text === "Home") {
      this.isHome = true;
      this.text = "Away";
    } else {
      this.isHome = false;
      this.text = "Home";
    }
  }
}
