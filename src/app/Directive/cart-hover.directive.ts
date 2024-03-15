import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCartHover]',
  standalone: true
})
export class CartHoverDirective {

  constructor(private render: Renderer2,private element:ElementRef) {   }
  @HostListener('mouseover') onMouseOver() {

    this.render.setStyle(this.element.nativeElement,'boxShadow','rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px')
    this.render.setStyle(this.element.nativeElement,'scale',1.01);
  }
  @HostListener('mouseout') onMouseOut() {
    this.render.setStyle(this.element.nativeElement,'boxShadow','none');
    this.render.setStyle(this.element.nativeElement,'scale',1);

  }

}


