import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultColor = '';
  @Input('appHighlight') highlightColor: string='';
  constructor( private el :ElementRef) {
  // this.el.nativeElement.style.backgroundColor='yellow';
   }
@HostListener('mouseenter') onMouseEnter()
{
 // this.highlight('yellow');
 this.highlight(this.highlightColor || this.defaultColor || 'red');
  
}
@HostListener('mouseleave') onMouseLeave()
{
  this.highlight('');
}
private highlight(color:string)
{
  this.el.nativeElement.style.backgroundColor=color;
  this.el.nativeElement.style.color="maroon";
}
}
