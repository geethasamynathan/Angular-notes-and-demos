import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputoutputExample';
myInputMessage:string ="I am from parent component"; 
childdata="";
GetChildData(data:any)
{
  this.childdata=data;
  console.log(data);
}
}
