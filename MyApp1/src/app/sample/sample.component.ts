import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
 // template : ``
  templateUrl: './sample.component.html',
  //styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title ="Sample Component";
  isDisabled =true;
  closeLabel="close";
  color="Green";
  text1="The <b>Angular</b> is printed in bold";
text2="<p>This is first para</p><p>This is second para</p> ";
imgpath="assets/images/3.jpg";

btnenable=true;
  constructor() {
    setTimeout(()=>{
      this.btnenable=false;
    },5000);
   }

  ngOnInit(): void {
  }

  
   getColspan()
   {
     return 2;
   }

}
