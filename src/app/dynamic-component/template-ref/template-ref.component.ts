import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {


  @ViewChild('templateRef', { static: true }) templateRef: TemplateRef<any>;

  @ViewChild('elementRef', { static: true }) elementRef: ElementRef;

  // 必须加入read 参数，否则angular 推断出类型
  @ViewChild('elementRef', { static: true, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    this.appendChildWithViewContainerRef();
  }

  appendChildWithDomApi(): void {
    const embeddedView = this.templateRef.createEmbeddedView(null);
    embeddedView.rootNodes.forEach(node => {
      this.elementRef.nativeElement.appendChild(node);
    });
  }

  appendChildWithViewContainerRef(): void {
    const data = [
      { label: '我是template 内嵌元素1', value: 1 },
      { label: '我是template 内嵌元素2', value: 2 },
      { label: '我是template 内嵌元素3', value: 3 },
    ];
    this.viewContainerRef.createEmbeddedView(this.templateRef, { data });
  }

}
