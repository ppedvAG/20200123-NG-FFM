import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsoverviewComponent } from './labsoverview/labsoverview.component';
import { TimeComponent } from './time/time.component';
import { DiceComponent } from './dice/dice.component';



@NgModule({
  declarations: [
    LabsoverviewComponent,
    TimeComponent,
    DiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabsoverviewComponent
  ]
})
export class LabsmdModule { }
