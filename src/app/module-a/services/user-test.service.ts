import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {
  randomValue = Math.random().toString();
  value = 'UserTestService';

  constructor() { }
}
