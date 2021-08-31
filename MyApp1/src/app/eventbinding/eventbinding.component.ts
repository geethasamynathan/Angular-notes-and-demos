import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  title= "Event Binding Demonstration"; 
  value1 ='sample';
  value2='';
;
  constructor() { }

  ngOnInit(): void {
  }
   clickcount=0;
  onSave()
  {
    this.clickcount++;
  }

}


