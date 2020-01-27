import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsoverviewComponent } from './labsoverview/labsoverview.component';
import { TimeComponent } from './time/time.component';
import { DiceComponent } from './dice/dice.component';
import { DicetestComponent } from './dicetest/dicetest.component';
import { DiashowComponent } from './diashow/diashow.component';
import { EventsComponent } from './events/events.component';
import { TimerComponent } from './timer/timer.component';
import { PwconfirmComponent } from './pwconfirm/pwconfirm.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LabsoverviewComponent,
    TimeComponent,
    DiceComponent,
    DicetestComponent,
    DiashowComponent,
    EventsComponent,
    TimerComponent,
    PwconfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LabsoverviewComponent
  ]
})
export class LabsmdModule { }
