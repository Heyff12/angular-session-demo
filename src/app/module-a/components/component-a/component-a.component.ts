import { Component, OnInit } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';
import { Router } from '@angular/router';
import { WithDIService, WithoutDIService } from '../../services/without-di.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  value = '';
  withoutDIService: WithoutDIService;

  constructor(private serviceB: ServiceBService,
              private router: Router,
              private withDIService: WithDIService) {
    this.withoutDIService = new WithoutDIService();
  }

  ngOnInit(): void {
    this.value = this.serviceB.getData();
    console.log('withoutDIService', this.withoutDIService.getData());
    console.log('withDIService', this.withDIService.getData());
  }

  handleClick(): void {
    this.router.navigateByUrl('/module-a/component-b');
  }

}
