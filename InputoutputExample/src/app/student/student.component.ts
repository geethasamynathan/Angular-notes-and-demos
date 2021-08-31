import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 	@Input() myinputMsg:string='';  
   @Output()myOutput:EventEmitter<string>=new EventEmitter();
   outputMessage:string='I am from Child Component';
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinputMsg);
  }
  sendtoParent()
  {
    this.myOutput.emit(this.outputMessage);
  }
}
