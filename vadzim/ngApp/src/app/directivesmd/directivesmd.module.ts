import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoverviewComponent } from './doverview/doverview.component';
import { Test1selectorDirective } from './test1selector.directive';
import { Test1selectorComponent } from './test1selector/test1selector.component';
import { NeedsGreeterDirective } from './needs-greeter.directive';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ChildDirComponent } from './child-dir/child-dir.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [DoverviewComponent, Test1selectorDirective, Test1selectorComponent, NeedsGreeterDirective, HelloWorldComponent, ChildDirComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivesmdModule { }
