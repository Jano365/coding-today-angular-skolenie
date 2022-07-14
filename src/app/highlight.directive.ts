import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor!: string; 

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight("");
  }

  constructor(private el: ElementRef) { 
    console.log('el', el);
  }

  hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
