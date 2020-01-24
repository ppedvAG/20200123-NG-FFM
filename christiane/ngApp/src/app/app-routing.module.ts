import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabsoverviewComponent } from './labsmdl/labsoverview/labsoverview.component';
import { TodosoverviewComponent } from './todosmdl/todosoverview/todosoverview.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'labs', component: LabsoverviewComponent},
  { path: 'todos', component: TodosoverviewComponent},
  { path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
