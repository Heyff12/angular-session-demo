import { Directive, ElementRef } from '@angular/core';
import { HostService } from '../services/host.service';

@Directive({
  selector: '[appHighlight]',
  providers: [{ provide: HostService, useValue: { value: 'directive service'}}]
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
