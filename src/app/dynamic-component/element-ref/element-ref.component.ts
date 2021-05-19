import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit, AfterViewInit {

  @ViewChild('element', { static: true }) element: ElementRef;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
    this.changeDomWithDomApi();

  }

  changeDomWithDomApi(): void {
    this.element.nativeElement.setAttribute('name', '王杰');
    this.element.nativeElement.setAttribute('class', 'name');

    this.element.nativeElement.removeAttribute('age');
  }

  changeDomWithRendererApi(): void {
    this.renderer2.addClass(this.element.nativeElement, 'name1');
    this.renderer2.removeAttribute(this.element.nativeElement, 'age');
  }

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement);

  }

}
