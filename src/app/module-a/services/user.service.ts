import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  randomValue = Math.random().toString();
  value = 'UserService';

  constructor() { }
}
