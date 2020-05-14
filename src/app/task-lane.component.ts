import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-lane',
  templateUrl:'./task-lane.component.html',
   styleUrls: ['./task-lane.component.css']
})
export class TaskLaneComponent  {
  @Input() name: string;
  @Input() list : any;
  @Input() connectedTo : any;



  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
