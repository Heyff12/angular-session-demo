import { Component, OnInit } from '@angular/core';
import { ServiceBService } from '../../services/service-b.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  value = '';

  constructor(private serviceB: ServiceBService,
              private router: Router) { }

  ngOnInit(): void {
    this.value = this.serviceB.getData();
  }

  handleClick(): void {
    this.router.navigateByUrl('/module-a/component-b');
  }

}
