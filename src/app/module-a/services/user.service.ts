import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  randomValue = Math.random().toString();
  value = 'UserService';

  constructor() { }
}
