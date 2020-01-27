import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passwordconfirm",
  templateUrl: "./passwordconfirm.component.html",
  styleUrls: ["./passwordconfirm.component.css"]
})
export class PasswordconfirmComponent implements OnInit {
  tsMyForm: any;
  modelBinded: string = "Bitte geben Sie 8 Zeichen";
  constructor() {}

  ngOnInit() {
    console.log("tsMyForm :", this.tsMyForm);
  }

  handleChange() {
    console.log("modelBinded :", this.modelBinded);
  }
}
