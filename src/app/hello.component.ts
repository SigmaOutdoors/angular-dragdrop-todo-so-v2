import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'todo-lane',
  templateUrl:'./hello.component.html',
   styleUrls: ['./hello.component.css']
})
export class HelloComponent  {
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
