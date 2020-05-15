import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TaskLaneComponent } from './task-lane.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule , BrowserAnimationsModule, FormsModule, WindowModule, ButtonsModule],
  declarations: [ AppComponent, TaskLaneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
