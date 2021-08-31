import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
pData:any;
cData:any;
  constructor() { 
    console.log(this.pData)
  }

  ngOnInit(): void {
  }
onchange(value:any)
{
  this.pData=value;
}

}
