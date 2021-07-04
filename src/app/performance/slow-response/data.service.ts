import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  sex: string;
  birthday: string;
  telephone: string;
}

@Injectable()
export class DataService {
  getData(): Person[] {
    const persons: Person[] = [];
    for (let i = 0; i < 1000; i++) {
      persons.push({
        name: '小张' + i,
        age: 15 + (i % 10),
        sex: i % 3 === 0 ? 'M' : 'W',
        birthday: new Date().toString(),
        telephone: '123456789' + i,
      });
    }
    return  persons;
  }
}
