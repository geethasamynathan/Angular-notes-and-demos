import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesExample';

product :Product;
products :Product[];
constructor(){
  this.product={Id:101,Name:'Geetha'};
  this.products=[
{Id:102,Name:"priya"},
{Id:103,Name:'riya'},
{Id:104,Name:'fransy'}
  ];
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
  
//DOB =new Date(1985,10,08);
}  


export class Product{
  Id:number=0;
  Name:string='';
}

