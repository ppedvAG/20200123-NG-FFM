import { Directive } from '@angular/core';
import { Greeter } from './greeter';

@Directive({
  // selector: '[appNeedsGreeter]'
  selector: 'needs-greeter'
})
export class NeedsGreeterDirective {
  greeter: Greeter;

  constructor(greeter: Greeter) {
    this.greeter = greeter;
   }

}
