import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LabsoverviewComponent } from "./labsoverview/labsoverview.component";
import { TimeComponent } from "./time/time.component";
import { DiceComponent } from "./dice/dice.component";
import { DiashowComponent } from "./diashow/diashow.component";
import { EventsComponent } from "./events/events.component";
import { TimerComponent } from "./timer/timer.component";
import { PasswordconfirmComponent } from "./passwordconfirm/passwordconfirm.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LabsoverviewComponent,
    TimeComponent,
    DiceComponent,
    DiashowComponent,
    EventsComponent,
    TimerComponent,
    PasswordconfirmComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [LabsoverviewComponent]
})
export class LabsmdlModule {}
