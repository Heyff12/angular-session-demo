import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomSingletonService {

  randomSingleton: string;
  constructor() {
    this.randomSingleton = Math.random().toString();
  }
}
