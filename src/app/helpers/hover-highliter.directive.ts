import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverHighliter]'
})
export class HoverHighliterDirective {

  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
