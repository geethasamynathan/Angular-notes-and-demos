import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnInit {
@Input() stock:number=0;
@Input() productid:number=1;
@Output() stockvaluechange=new EventEmitter();
color=''
updatedstockvalue:any;
stockValueChanged()
{
  this.stockvaluechange.emit({id:this.productid,updatedstockvalue:this.stock});
  console.log('stockvaluechanged fired')
  this.updatedstockvalue=null;
}


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if (this.stock > 10) {
        this.color = 'green';
    } else {
        this.color = 'red';
    }
}
  // ngOnChanges() {

  //       if (this.stock > 10) {
  //           this.color = 'green';
  //       } else {
  //           this.color = 'red';
  //       }
  //   }
}
