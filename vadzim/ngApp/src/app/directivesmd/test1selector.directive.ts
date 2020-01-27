import { Directive } from '@angular/core';
import { Bigmaker } from './bigmaker';

@Directive({
  selector: 'bigmaker-holder',
  exportAs: 'testttt'
})
export class Test1selectorDirective {
  bigmaker: Bigmaker;
  constructor(bigmaker: Bigmaker) {
    this.bigmaker = bigmaker;
  }
}
