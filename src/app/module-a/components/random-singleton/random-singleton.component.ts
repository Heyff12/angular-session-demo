import { Component, OnInit } from '@angular/core';
import { RandomSingletonService } from '../../services/random-singleton.service';
import { RandomSingleton2Service } from '../../services/random-singleton2.service';

@Component({
  selector: 'app-random-singleton',
  template: `<div>
      <p>provideIn root: {{ randomSingletonService.randomSingleton }}</p>
      <p>模块 provide service: {{ randomSingleton2Service.randomSingleton }}</p>
  </div>`,
})
export class RandomSingletonComponent implements OnInit {

  constructor(public randomSingletonService: RandomSingletonService,
              public randomSingleton2Service: RandomSingleton2Service) { }

  ngOnInit(): void {}
}
