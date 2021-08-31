import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template :`<div> 
  <button class='colorClass' [class]="classestoapply"> Click Me</button>
  <button [class]="classestoapply" class='colorClass' [class.boldClass]="applyboldclass">Click Here </button>

  <button [ngClass]='AddCssclasses()'> Applying CSS</button>
  </div>`,
  //templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  classestoapply:string='boldClass italicClass';
  applyboldclass:boolean=true;
  applyitalicclass:boolean=true;
  applycolorclass=true;
  constructor() { }

  ngOnInit(): void {
  }
AddCssclasses(){
  var CSSclasses={
    boldClass:this.applyboldclass,
    italicClass:this.applyitalicclass,
    colorClass:this.applycolorclass
  }
  return CSSclasses;
}
}
