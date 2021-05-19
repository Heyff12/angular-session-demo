import { Component, OnInit } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  value = '';

  constructor(private serviceB: ServiceBService) { }

  ngOnInit(): void {
    this.value = this.serviceB.getData();
  }

}
