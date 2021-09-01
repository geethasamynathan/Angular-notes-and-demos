import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
// providers :[StudentService]
})
export class StudentdetailComponent implements OnInit {
students :any[]=[];
  constructor(private _studentservice:StudentService) { 
  }

  ngOnInit(): void {
    this.students=this._studentservice.getStudents();
  }

}
