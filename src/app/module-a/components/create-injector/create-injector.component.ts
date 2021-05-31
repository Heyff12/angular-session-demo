import { Component, Injector, OnInit } from '@angular/core';
import { ReplaceTestService, TestService } from '../../services/create-injector.service';

@Component({
  selector: 'app-create-injector',
  templateUrl: './create-injector.component.html',
  styleUrls: ['./create-injector.component.scss']
})
export class CreateInjectorComponent implements OnInit {
  testService: TestService;

  constructor() {
    const injector = Injector.create({ providers: [{ provide: TestService, useClass: ReplaceTestService}] });
    this.testService = injector.get(TestService);
  }

  ngOnInit(): void {
  }

}
