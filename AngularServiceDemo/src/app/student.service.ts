import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents():any[]{
    return[
      { Id:1,Name:'Chandana', Gender:'female'},
      { Id:2,Name:'Dhivya sri', Gender:'female'},
      { Id:3,Name:'Jayadeep', Gender:'male'},
      { Id:4,Name:'Sruthi', Gender:'female'}
    ];
  };

  
  constructor() { }
}
