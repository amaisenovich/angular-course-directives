import { Directive, DoCheck, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SwitchDirective } from 'src/app/switch/switch.directive'
import { SwitchValue } from '../switch-value.type';

@Directive({
  selector: '[appSwitchCase]'
})
export class SwitchCaseDirective implements OnInit, DoCheck {
  @Input('appSwitchCase')
  value: SwitchValue;

  embeddedViewRef: EmbeddedViewRef<HTMLElement> | null = null

  constructor(
    protected switchDirective: SwitchDirective,
    protected containerViewRef: ViewContainerRef,
    protected templateRef: TemplateRef<HTMLElement>
  ) {
  }

  isMounted = () => {
    return !!this.embeddedViewRef;
  }

  mount = () => {
    if (this.embeddedViewRef) {
      return
    }

    this.embeddedViewRef = this.containerViewRef.createEmbeddedView(this.templateRef)
  }

  unmount = () => {
    if (!this.embeddedViewRef) {
      return
    }

    const index = this.containerViewRef.indexOf(this.embeddedViewRef)
    this.containerViewRef.remove(index)
    this.embeddedViewRef = null
  }

  check = () => {
    return this.switchDirective.check(this.value)
  }

  ngOnInit() {
    this.switchDirective.addCase(this.value)
  }

  ngDoCheck() {
    if (this.check()) {
      !this.isMounted() && this.mount()
    } else {
      this.isMounted() && this.unmount()
    }
  }
}
