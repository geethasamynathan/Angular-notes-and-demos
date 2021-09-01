import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
  //providers:[StudentService]
})
export class StudentlistComponent implements OnInit {
students:any[];
  constructor(private _studentsevice:StudentService) { 
    this.students=_studentsevice.getStudents();
  }

  ngOnInit(): void {
  }

}
