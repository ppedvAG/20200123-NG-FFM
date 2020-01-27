import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabsoverviewComponent } from './labsmd/labsoverview/labsoverview.component';
import { TodosoverviewComponent } from './todosmd/todosoverview/todosoverview.component';
import { AppComponent } from './app.component';
import { DoverviewComponent } from './directivesmd/doverview/doverview.component';

const routes: Routes = [
  { path: 'labs', component: LabsoverviewComponent},
  { path: 'todos', component: TodosoverviewComponent},
  { path: 'directives', component: DoverviewComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
