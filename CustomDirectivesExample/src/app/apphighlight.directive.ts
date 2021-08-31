import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[apphighlight]'
})
export class ApphighlightDirective {
@Input() apphighlight='';
  // constructor(el:ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  //  }
  constructor(private el:ElementRef){

  }
   private highlight(color:string)
   {
     this.el.nativeElement.style.backgroundColor=color;
   }
   @HostListener('mouseenter') onMouseEnter(){
     this.highlight('yellow');
   }
@HostListener('mouseleave') onMouseLeave(){
  this.highlight('');
}
}
