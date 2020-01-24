import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styles: []
})
export class TodotableComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(array => this.todos = array)
  }

}
