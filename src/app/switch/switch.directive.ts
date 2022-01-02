import { Directive, Input } from '@angular/core';
import { SwitchValue } from './switch-value.type'

@Directive({
  selector: '[appSwitch]'
})
export class SwitchDirective {
  @Input('appSwitch')
  condition: SwitchValue

  cases: SwitchValue[] = []

  addCase = (newCase) => {
    this.cases = [
      ...this.cases,
      newCase
    ]
  }

  comparator = (caseValue: SwitchValue) => {
    return this.condition === caseValue
  }

  check = (caseValue: SwitchValue) => {
    return this.comparator(caseValue)
  }

  checkDefault = () => {
    return !this.cases.find(this.comparator)
  }
}
