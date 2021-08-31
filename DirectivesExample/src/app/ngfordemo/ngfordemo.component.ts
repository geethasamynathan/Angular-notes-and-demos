import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent implements OnInit {

  Employees =[
    {id:1,name:'sherin',email:'sherin@gmail.com'},
    {id:2,name:'kiran',email:'kiran@gmail.com'},
    {id:3,name:'tina',email:'tina@gmail.com'},
    {id:4,name:'pam',email:'pam@gmail.com'}
  ];
  
  // employees = [
  //   {
  //     name: "Rahul", email: "rahul@gmail.com",
  //     skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
  //     ]
  //   },
  //   {
  //     name: "Sachin", email: "sachin@gmail.com",
  //     skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
  //     ]
  //   },
  //   {
  //     name: "Laxmna", email: "laxman@gmail.com",
  //     skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
  //     ]
  //   }
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
