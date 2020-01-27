import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LabsoverviewComponent } from "./labsmdl/labsoverview/labsoverview.component";
import { TodooverviewComponent } from "./todomdl/todooverview/todooverview.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "labs", component: LabsoverviewComponent },
  { path: "todos", component: TodooverviewComponent },
  { path: "", component: AppComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
