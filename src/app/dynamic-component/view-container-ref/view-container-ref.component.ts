import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements OnInit {


  @ViewChild('containerRef', { static: true , read: ViewContainerRef }) containerRef: ViewContainerRef;
  @ViewChild('templateRef', { static: true }) templateRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
    // this.containerRef.createEmbeddedView(this.templateRef, null);
    const embeddedView = this.templateRef.createEmbeddedView(null);
    this.containerRef.insert(embeddedView);
  }

}
