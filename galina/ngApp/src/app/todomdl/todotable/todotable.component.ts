import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/todo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todotable",
  templateUrl: "./todotable.component.html",
  styles: []
})
export class TodotableComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // einmal eingesetzt, um schnell Daten zu holen
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then(response => response.json())
    //   // .then(json => console.log(json));
    //   .then(array => (this.todos = array));
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(array => (this.todos = array));
  }
}
