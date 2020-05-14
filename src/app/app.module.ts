import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TaskLaneComponent } from './task-lane.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, TaskLaneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
