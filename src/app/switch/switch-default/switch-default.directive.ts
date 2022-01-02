import { Directive } from '@angular/core';
import { SwitchCaseDirective } from '../switch-case/switch-case.directive';

@Directive({
  selector: '[appSwitchDefault]'
})
export class SwitchDefaultDirective extends SwitchCaseDirective {
  check = () => {
    return this.switchDirective.checkDefault()
  }
}
