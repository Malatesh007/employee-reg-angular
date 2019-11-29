import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appUpdatecolor]'
})
export class UpdatecolorDirective {

  refElemet;ElementRef;
  renderTemp: Renderer2;
  constructor(element: ElementRef,render: Renderer2) {
    console.log(element.nativeElement);
    this.refElemet = element;
    this.renderTemp = render;
   }

   @HostListener('mouseenter') onMouseEnter() {
    //  cons
    this.renderTemp.setStyle(this.refElemet.nativeElement,'backgroundColor','pink');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderTemp.setStyle(this.refElemet.nativeElement,'backgroundColor','white');
  }
}
