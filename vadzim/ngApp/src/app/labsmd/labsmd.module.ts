import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsoverviewComponent } from './labsoverview/labsoverview.component';



@NgModule({
  declarations: [LabsoverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LabsoverviewComponent
  ]
})
export class LabsmdModule { }
