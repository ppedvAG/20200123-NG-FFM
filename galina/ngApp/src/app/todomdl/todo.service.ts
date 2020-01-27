import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Todo } from "./models/todo";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todosUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(catchError(this.handleError("getTodos", [])));
  }

  private handleError<T>(method = "method", result: T) {
    return (error: any): Observable<T> => {
      console.error("error :", error);
      return of(result as T);
    };
  }
}
