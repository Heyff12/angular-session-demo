import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Renderer2, SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-template-ref-child',
  templateUrl: './template-ref-child.component.html',
  styleUrls: ['./template-ref-child.component.scss']
})
export class TemplateRefChildComponent implements OnInit, OnChanges {

  @Input() title: TemplateRef<any> | string;
  data: Array<any> = [
    { label: '我是template 内嵌元素4', value: 4 },
    { label: '我是template 内嵌元素5', value: 5 },
    { label: '我是template 内嵌元素6', value: 6 },
  ];

  @ViewChild('containerRef', { static: true, read: ViewContainerRef }) containerRef: ViewContainerRef;
  constructor(private renderer2: Renderer2) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.title && changes.title.currentValue) {
      this.insertTemplateRef();
    }
  }

  ngOnInit(): void {}

  insertTemplateRef(): void {
    if (typeof this.title === 'string') {
      const textNode = this.renderer2.createText(this.title);
      this.renderer2.appendChild(this.containerRef.element.nativeElement, textNode);
    }

    if (this.title instanceof TemplateRef) {
      this.containerRef.createEmbeddedView(this.title, { data: this.data });
    }
  }

}
