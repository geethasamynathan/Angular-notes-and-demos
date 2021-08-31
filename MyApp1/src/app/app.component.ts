import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string ="Geetha";
  public designation:string="Consultant";
  num1:number=0;
  integerNumbers:number[]=[2,45,6,78,45,34];
  title = 'MyApp1';
  ngOnInit():void{}
   greetme():any{
     return "Hello Welcome";
   }
   todaydate():any{
     return Date.now();
   }
}
