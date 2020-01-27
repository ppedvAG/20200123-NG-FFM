import { Component, OnInit } from '@angular/core';
import { Greeter } from '../greeter';

@Component({
  selector: 'greet',
  viewProviders: [ Greeter],
  templateUrl: './hello-world.component.html',
  styles: []
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
