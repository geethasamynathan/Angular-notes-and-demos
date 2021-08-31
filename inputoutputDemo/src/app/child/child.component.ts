import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() pData:any;
@Output() childEvent=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onchange(value:any)
  {
this.childEvent.emit(value);
  }
}
