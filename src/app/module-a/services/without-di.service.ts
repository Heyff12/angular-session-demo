import { Injectable } from '@angular/core';

export class WithoutDIService {

  constructor() { }

  getData(): string {
    return 'without DI';
  }
}

@Injectable({
  providedIn: 'root'
})
export class WithDIService {

  constructor() { }

  getData(): string {
    return 'with DI';
  }
}
