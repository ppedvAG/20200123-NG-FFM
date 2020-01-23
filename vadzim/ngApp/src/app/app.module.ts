import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabsmdModule } from './labsmd/labsmd.module';
import { TodosmdModule } from './todosmd/todosmd.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabsmdModule,
    TodosmdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
