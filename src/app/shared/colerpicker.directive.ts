import { Directive, HostBinding, HostListener, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appColerpicker]'
})
export class ColerpickerDirective implements OnInit{
@Input() my_color:string = "yello";
  
  constructor(private elRef:ElementRef,private renderer: Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.my_color;
  }
@HostBinding('style.backgroundColor') backgroundColor:string = this.my_color;
@HostListener('mouseenter') mouseover(e:Event){
  this.renderer.setStyle(this.elRef.nativeElement,"background-color","green");
} 
@HostListener('mouseleave') mouseleave(e:Event){
  
  this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","");
}
}
