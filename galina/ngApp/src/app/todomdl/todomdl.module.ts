import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodooverviewComponent } from "./todooverview/todooverview.component";
import { RattingComponent } from './ratting/ratting.component';
import { TodotableComponent } from './todotable/todotable.component';

@NgModule({
  declarations: [TodooverviewComponent, RattingComponent, TodotableComponent],
  imports: [CommonModule],
  exports: [TodooverviewComponent]
})
export class TodomdlModule {}
