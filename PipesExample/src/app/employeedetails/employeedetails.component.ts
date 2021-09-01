import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees: any[] = [  
    {  
        code: 'emp101', name: 'Karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '6/25/1988'  
    },  
    {  
        code: 'emp102', name: 'Sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp103', name: 'Rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  	
        code: 'emp104', name: 'Mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '10/1/1980'  
    },  
];  

}
