import { Component, Inject, OnInit } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';
import { Router } from '@angular/router';
import { WithDIService, WithoutDIService } from '../../services/without-di.service';
import { API_URL } from '../../module-a.module';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  value = '';
  withoutDIService: WithoutDIService;

  constructor(public serviceB: ServiceBService,
              private router: Router,
              // @Inject(WithDIService) private withDIService: WithDIService,
              private withDIService: WithDIService,
              @Inject('test') private test: string,
              @Inject(API_URL) private apiURL: string) {
    this.withoutDIService = new WithoutDIService();
  }

  ngOnInit(): void {
    // this.value = this.serviceB.getData();
    console.log('withoutDIService', this.withoutDIService.getData());
    console.log('withDIService', this.withDIService.getData());
    console.log('test', this.test);
    console.log('API_URL', this.apiURL);
  }

  handleClick(): void {
    this.router.navigateByUrl('/module-a/component-b');
  }

}
