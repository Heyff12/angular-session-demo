import { Injectable } from '@angular/core';

@Injectable()
export class RandomSingleton2Service {

  randomSingleton: string;
  constructor() {
    this.randomSingleton = Math.random().toString();
  }
}
