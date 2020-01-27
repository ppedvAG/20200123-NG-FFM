import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoverviewComponent } from './doverview/doverview.component';
import { Test1selectorDirective } from './test1selector.directive';



@NgModule({
  declarations: [DoverviewComponent, Test1selectorDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesmdModule { }
