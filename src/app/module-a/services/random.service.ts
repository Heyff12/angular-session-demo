import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  random: string;
  constructor() {
    this.random = Math.random().toString();
  }
}
