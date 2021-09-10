import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[stared]'
})
export class StaredDirective {

  @Input() stared = false;

  constructor() { }

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    console.log(this.stared);
    return this.stared ? 'bi-star-fill' : 'bi-star';
  }

}
