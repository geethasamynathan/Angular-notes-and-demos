import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  status:string='success';
  constructor() { }

  ngOnInit(): void {
  }

  getcolor()
  {
    return 'orange';
  }
}
