import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import * as faker from 'faker';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';


const DEFAULT_DURATION = 300;



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class AppComponent {
  toDoList = [];
  collapsed = false;
  inProgressList = [];
  doneList = [];

  // window stuff

 public windowTop: number = 100;
  public opened = false;
    public dataSaved = false;
    nn = { "desc" : "", priority: "", dueDate : "", owner : "" };
    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        console.log(this.nn.desc);
        this.close();
    }

  //window stuff



  constructor() {
     //this.toDoList1 = Array.from({ length: 5 }).map(() => faker.hacker.phrase());
    
 this.toDoList = [{
   "id" : 10,
 		"title": "Set up a call with the Order Management team.",
    "updateTime" : "05/10/2020 12:34PM",
    "priority" : "High"
 	},
 	{
     "id" : 11,
		"title": "Discuss new GTT disputes",
    "updateTime" : "05/01/2020 8:34AM",
    "priority" : "Medium"
 	}
 ];
    // debugger;
    this.inProgressList = [{
      "id" : 12,
 		"title": "Issue credit for service outage.",
    "updateTime" : "05/10/2020 11:24PM",
    "priority" : "Low"
 	},
 	{
     "id" : 13,
		"title": "Investigate root cause.",
    "updateTime" : "05/01/2020 7:55AM",
    "priority" : "Medium"
 	},
 	{
     "id" : 14,
		"title": "Review Claim ATT12345",
    "updateTime" : "05/09/2020 2:47PM",
    "priority" : "High"
     
 	}
 ];
    this.doneList = [{
      "id" : 15,
 		"title": "Process New Claims for today",
    "updateTime" : "05/10/2020 11:24PM",
    "priority" : "Low"
 	},
 	{
		"title": "Credit Claim ATT5678",
    "updateTime" : "05/01/2020 7:55AM",
    "priority" : "Medium"
 	}];

  }

// see https://stackoverflow.com/questions/53144939/angular-cdk-connecting-multiple-drop-zones-with-cdkdroplistconnectedto


  trash(list : any[], index)
  {
    // alert('kiko!'+ index);

    list.splice(index,1);

  }


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
  onEntered(enter) {
    console.log('ee', enter);
  }

  taskStatus = ""
  bb()
  {
    this.collapsed = !this.collapsed;
    if (this.collapsed)
       this.taskStatus = "Tasks...";
       else 
       this.taskStatus = "";
  }
}
