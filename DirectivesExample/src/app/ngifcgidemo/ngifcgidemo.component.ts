import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifcgidemo',
  templateUrl: './ngifcgidemo.component.html',
  styleUrls: ['./ngifcgidemo.component.css']
})
export class NgifcgidemoComponent implements OnInit {

  isvalid:boolean=true;
  buttoncontent:any='show';
  show :boolean=false;
  // eids=[101,102,103,104,105,106];

  // employees =[
  //   {name:'tina',gender:"female",salary:100},
  //   {name:'sam',gender:"male",salary:140},
  //   {name:'kiara',gender:"female",salary:100},
  //   {name:'pam',gender:"female",salary:100},
  // ]
  
  constructor() { }

  ngOnInit(): void {
  }
  isvalidchange()
{
  this.isvalid =!this.isvalid;
}
toggle()
{
  if(this.buttoncontent==="show")
  console.log( 'button content is show')
this.show =!this.show;
if(this.show)
this.buttoncontent='Hide';
else
this.buttoncontent='show';
}
}
