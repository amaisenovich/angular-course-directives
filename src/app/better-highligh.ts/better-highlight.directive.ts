import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input()
  defaultColor: string = 'transparent';

  @Input('appBetterHighlight')
  highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultColor;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
}