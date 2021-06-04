import { ApplicationRef, Component, OnInit } from '@angular/core';
import { DynamicCreateComponentService } from '../services/dynamic-create-component.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-component-ref',
  templateUrl: './component-ref.component.html',
  styleUrls: ['./component-ref.component.scss']
})
export class ComponentRefComponent implements OnInit {

  modalComponentRef;

  constructor(private dynamicCreateComponentService: DynamicCreateComponentService,
              private applicationRef: ApplicationRef) { }

  ngOnInit(): void {
  }

  handleConfirm(): void {
    if (this.modalComponentRef) {
      this.applicationRef.detachView(this.modalComponentRef.hostView);
    }
    this.modalComponentRef = this.dynamicCreateComponentService.appendComponentToRoot(ModalComponent, {});
  }

}
