import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBService {
  value = 'serviceB'

  constructor() { }

  getData(): string {
    return '';
  }
}
