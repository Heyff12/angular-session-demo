import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-random',
  template: `<p>{{ randomService.random }}</p>`,
  providers: [RandomService]
})
export class RandomComponent implements OnInit {

  constructor(public randomService: RandomService) { }

  ngOnInit(): void {}
}
