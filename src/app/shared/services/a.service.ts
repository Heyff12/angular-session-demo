import { Injectable } from '@angular/core';

@Injectable()
export class AService {
  value = Math.random().toString();

  constructor() { }
}
