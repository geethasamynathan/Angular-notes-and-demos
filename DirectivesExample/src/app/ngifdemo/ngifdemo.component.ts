import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
  templateUrl: './ngifdemo.component.html',
  styleUrls: ['./ngifdemo.component.css']
})
export class NgifdemoComponent implements OnInit {
  title: string = 'ngIf Example' ;
  showMe=false;
  showActions: boolean = false;  
  contacts=[
    {name: "test1", email:"test1@test1.com"},
    {name: "test2", email:"test1@test2.com"},
    {name: "test3", email:"test1@test3.com"},
    {name: "test4", email:"test1@test4.com"}
    ]
  constructor() { }

  ngOnInit(): void {
  }
  

}
