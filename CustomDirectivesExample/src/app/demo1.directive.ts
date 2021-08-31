import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appDemo1]'
})
export class Demo1Directive {
@Input() defaultColor='';
@Input('appDemo1') highlightColor = '';
  constructor(private el:ElementRef) { 
   // this.el.nativeElement.style.backgroundColor='yellow';
  }
  private highlight(color:string)
  {
    this.el.nativeElement.style.backgroundColor=color;
  }
@HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.highlightColor || this.defaultColor || 'red');
}
@HostListener('mouseleave') onMouseLeave(){
  this.highlight('');
}
}
